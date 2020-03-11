import * as React from "react";
import { observer } from "mobx-react";
import { TextField } from "@material-ui/core";
import SearchStatus from "./SearchStatus";
import { MovieSearchStoreContext } from "../../context/BookSearchStoreContext";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

@observer
export class SearchTextField extends React.Component<Props> {
  static contextType = MovieSearchStoreContext;
  context!: React.ContextType<typeof MovieSearchStoreContext>;

  render() {
    const { onChange } = this.props;
    const { term } = this.context;
    return (
      <MovieSearchStoreContext.Consumer>
        {store => (
          <React.Fragment>
            <TextField
              value={term}
              fullWidth={true}
              onChange={onChange}
              placeholder="Search Books..."
              onKeyUp={this.onKeyUp}
            />
            <SearchStatus />
          </React.Fragment>
        )}
      </MovieSearchStoreContext.Consumer>
    );
  }

  onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode !== 13) {
      return;
    }

    this.props.onEnter();
  };
}
