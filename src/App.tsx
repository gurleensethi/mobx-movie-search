import React from "react";
import { inject, observer } from "mobx-react";
import { StoreProps, defaultStoreProps } from "./typings";
import { Grid, Paper } from "@material-ui/core";
import { SearchTextField } from "./components/SearchTextField/SearchTextField";

@inject("store")
@observer
export default class App extends React.Component<StoreProps> {
  static defaultProps = defaultStoreProps;

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
    this.props.store.setTerm(event.target.value);
  };
}
