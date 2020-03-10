import React from "react";
import { observer } from "mobx-react";
import { Grid, Paper } from "@material-ui/core";
import { SearchTextField } from "./components/SearchTextField/SearchTextField";
import { MovieSearchStoreContext } from "./context/BookSearchStoreContext";

@observer
export default class App extends React.Component {
  static contextType = MovieSearchStoreContext;
  context!: React.ContextType<typeof MovieSearchStoreContext>;

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <SearchTextField
                onChange={this.updateSearchTextField}
                onEnter={() => console.log("Enter")}
              />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  updateSearchTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.context.setTerm(event.target.value);
  };
}
