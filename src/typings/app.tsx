export interface MovieSearchResult {
  total: number;
  items: number[];
}

export enum Status {
  NONE = "none",
  LOADING = "loading",
  FAILED = "failed",
  COMPLETED = "completed"
}
