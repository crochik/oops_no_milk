import { login } from '../bootstrapp/auth'

export function Login() {
  return (
    <div className="login-hero">
      <div className="logo">🥛</div>
      <h1>oops_no_milk</h1>
      <p>The grocery list app for households with receipts.</p>
      <button className="btn-primary" onClick={() => { void login() }}>
        Log in &rarr;
      </button>
      <p style={{ fontSize: '0.8rem', marginTop: '3rem', color: 'var(--text-dim)' }}>
        Multi-household. Multi-grudge. Receipts included.
      </p>
    </div>
  )
}
