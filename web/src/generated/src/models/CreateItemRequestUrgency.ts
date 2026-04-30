/**
 * How badly the household needs this. 'chill' = nice to have, 'soon' = grab on the next trip, 'out_of_milk' = drop everything (the brand-tier crisis).
 */
export enum CreateItemRequestUrgency {
  /** chill */
  Chill = "chill",
  /** out_of_milk */
  OutOfMilk = "out_of_milk",
  /** soon */
  Soon = "soon"
}
