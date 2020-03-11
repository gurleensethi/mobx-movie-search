import * as React from "react";
import { observer } from "mobx-react";
import { MovieSearchStoreContext } from "../../context/BookSearchStoreContext";
import { Grid, Typography, Divider } from "@material-ui/core";
import { Status } from "../../typings";

interface Props {
  style?: React.CSSProperties;
}

@observer
export class ResultsList extends React.Component<Props> {
  static contextType = MovieSearchStoreContext;
  context!: React.ContextType<typeof MovieSearchStoreContext>;

  render() {
    const { style } = this.props;
    const { results, totalCount, status, isEmpty } = this.context;

    return (
      <Grid spacing={10} container style={style}>
        {isEmpty && status === Status.COMPLETED ? (
          <Grid item xs={12}>
            Empty Results
          </Grid>
        ) : null}

        {!isEmpty && status === Status.COMPLETED ? (
          <Grid item xs={12}>
            <Typography>
              Showing <strong>{results.length}</strong> results out of{" "}
              <strong>{totalCount}</strong>.
            </Typography>
            <Divider />
          </Grid>
        ) : null}

        {results.map(item => (
          <Grid item xs={12} key={item.id}>
            {JSON.stringify(item, null, 2)}
            <Divider />
          </Grid>
        ))}
      </Grid>
    );
  }
}
