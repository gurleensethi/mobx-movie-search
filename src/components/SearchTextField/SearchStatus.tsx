import * as React from "react";
import { observer } from "mobx-react";
import { MovieSearchStoreContext } from "../../context/BookSearchStoreContext";

export const SearchStatus: React.StatelessComponent = observer(props => {
  const store = React.useContext(MovieSearchStoreContext);
  const { status, term } = store;

  return <React.Fragment>{term}</React.Fragment>;
});
