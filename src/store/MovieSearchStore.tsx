import { observable, action, runInAction, computed } from "mobx";
import { MovieAPI } from "../api/MovieAPI";
import { Status } from "../typings";

export class MovieSearchStore {
  @observable term: string = "";
  @observable status: Status = Status.NONE;
  @observable.shallow results: any[] = [];
  @observable totalCount: number = 0;

  @computed
  get isEmpty(): boolean {
    return this.totalCount === 0;
  }

  @action.bound
  async search(): Promise<void> {
    this.status = Status.LOADING;

    try {
      const result = await MovieAPI.searchMovies(this.term);

      runInAction(() => {
        this.totalCount = result.total;
        this.results = result.items;
        this.status = Status.COMPLETED;
      });
    } catch (error) {
      runInAction(() => (this.status = Status.FAILED));
    }
  }

  @action
  setTerm(term: string): void {
    this.term = term;
  }
}

export const store = new MovieSearchStore();
