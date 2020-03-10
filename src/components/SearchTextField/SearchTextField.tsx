import React from "react";
import { inject, observer } from "mobx-react";
import { StoreProps, defaultStoreProps } from "../../typings";
import { TextField } from "@material-ui/core";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

@inject("store")
@observer
export class SearchTextField extends React.Component<Props & StoreProps> {
  static defaultProps = defaultStoreProps;
  render() {
    const { onChange, store } = this.props;
    const { term } = store;
    return (
      <React.Fragment>
        <TextField
          value={term}
          fullWidth={true}
          onChange={onChange}
          placeholder="Search Books..."
          onKeyUp={this.onKeyUp}
        />
      </React.Fragment>
    );
  }

  onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode !== 13) {
      return;
    }

    this.props.onEnter();
  };
}
