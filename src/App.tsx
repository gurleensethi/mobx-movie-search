import React from "react";
import { inject, observer } from "mobx-react";
import { StoreProps, defaultStoreProps } from "./typings";

@inject("store")
@observer
export default class App extends React.Component<StoreProps> {
  static defaultProps = defaultStoreProps;

  render() {
    const { store } = this.props;
    console.log(store);
    return <div>Return Testing</div>;
  }
}
