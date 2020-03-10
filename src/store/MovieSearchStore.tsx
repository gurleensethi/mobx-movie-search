import { observable } from "mobx";

export class MovieSearchStore {
  @observable term: string = "";
  @observable status: string = "";
  @observable.shallow results: any[] = [];
  @observable totalCount: number = 0;
}

export const store = new MovieSearchStore();
