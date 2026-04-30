/**
 * Aisle/section the item belongs to, drawn from a fixed seed list. Drives UI grouping and section emoji rendering.
 */
export enum UpdateItemRequestSection {
  /** baby */
  Baby = "baby",
  /** bakery */
  Bakery = "bakery",
  /** beverages */
  Beverages = "beverages",
  /** dairy_eggs */
  DairyEggs = "dairy_eggs",
  /** frozen */
  Frozen = "frozen",
  /** household */
  Household = "household",
  /** meat_seafood */
  MeatSeafood = "meat_seafood",
  /** other */
  Other = "other",
  /** pantry */
  Pantry = "pantry",
  /** personal_care */
  PersonalCare = "personal_care",
  /** pet */
  Pet = "pet",
  /** produce */
  Produce = "produce",
  /** snacks */
  Snacks = "snacks"
}
