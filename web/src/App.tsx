import { useEffect, useState } from 'react'
import './App.css'
import {
  getAccessToken,
  handleCallbackIfPresent,
  restoreSession,
  subscribe,
} from './bootstrapp/auth'
import { Login } from './screens/Login'
import { HouseholdPicker } from './screens/HouseholdPicker'
import { ItemList } from './screens/ItemList'

const HH_KEY = 'oops_no_milk.current_household'
const HH_NAME_KEY = 'oops_no_milk.current_household_name'

function App() {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const [authError, setAuthError] = useState<string | null>(null)
  const [household, setHousehold] = useState<{ id: string; name: string } | null>(() => {
    const id = sessionStorage.getItem(HH_KEY)
    const name = sessionStorage.getItem(HH_NAME_KEY)
    return id ? { id, name: name ?? 'Household' } : null
  })

  useEffect(() => {
    const unsub = subscribe(() => setAuthed(!!getAccessToken()))
    ;(async () => {
      try {
        const handled = await handleCallbackIfPresent()
        if (!handled) restoreSession()
      } catch (e) {
        setAuthError(e instanceof Error ? e.message : String(e))
      }
      setAuthed(!!getAccessToken())
    })()
    return unsub
  }, [])

  function pickHousehold(id: string, name: string) {
    sessionStorage.setItem(HH_KEY, id)
    sessionStorage.setItem(HH_NAME_KEY, name)
    setHousehold({ id, name })
  }

  function leaveHousehold() {
    sessionStorage.removeItem(HH_KEY)
    sessionStorage.removeItem(HH_NAME_KEY)
    setHousehold(null)
  }

  if (authed === null) {
    return (
      <div className="app center">
        <span className="spinner" />
      </div>
    )
  }

  return (
    <div className="app">
      {authError && <div className="error">Login error: {authError}</div>}
      {!authed ? (
        <Login />
      ) : !household ? (
        <HouseholdPicker onPick={pickHousehold} />
      ) : (
        <ItemList
          householdId={household.id}
          householdName={household.name}
          onLeave={leaveHousehold}
        />
      )}
    </div>
  )
}

export default App
