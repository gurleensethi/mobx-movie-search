import * as React from "react";
import { MovieSearchStore, store } from "../store/MovieSearchStore";

export const MovieSearchStoreContext = React.createContext<MovieSearchStore>(store);
