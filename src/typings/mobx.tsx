import { MovieSearchStore } from "../store/MovieSearchStore";

export interface StoreProps {
  store: MovieSearchStore;
}

export const defaultStoreProps: StoreProps = {
  store: (null as unknown) as MovieSearchStore
};
