import * as React from "react";
import { observer } from "mobx-react";
import { withMovieContext } from "../../hoc/withMovieContext";
import { StoreProps, Status } from "../../typings";
import { LinearProgress, Typography } from "@material-ui/core";

interface Props extends StoreProps {}

const SearchStatus: React.StatelessComponent<Props> = observer(props => {
  const { store } = props;
  const { status, term } = store;

  return (
    <React.Fragment>
      {status === Status.LOADING ? <LinearProgress variant="query" /> : null}
      {status === Status.FAILED ? (
        <Typography
          variant="body2"
          style={{ color: "red", marginTop: "1rem" }}
        >{`Failed to fetch results for "${term}"`}</Typography>
      ) : null}
    </React.Fragment>
  );
});

export default withMovieContext(SearchStatus);
