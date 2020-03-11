import * as React from "react";
import { observer } from "mobx-react";
import { withMovieContext } from "../../hoc/withMovieContext";
import { MovieSearchStore } from "../../store/MovieSearchStore";

interface Props {
  movieSearchStore: MovieSearchStore;
}

const SearchStatus: React.StatelessComponent<Props> = observer(props => {
  const { movieSearchStore: store } = props;
  const { status, term } = store;

  return <React.Fragment>{term}</React.Fragment>;
});

export default withMovieContext(SearchStatus);
