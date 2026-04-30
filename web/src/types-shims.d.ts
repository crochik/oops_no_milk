// Shims for symbols the generated bootstrapp client references but does not
// emit. These are unrelated to oops_no_milk but appear in shared/system models
// (e.g. Organization) that come along with every generated client.
declare type MarketingInfo = unknown
declare class MarketingInfoSerializer {
  static fromObject(obj: unknown): unknown
  static toObject(obj: unknown): unknown
}
