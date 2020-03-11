import * as React from "react";
import { MovieSearchStoreContext } from "../context/BookSearchStoreContext";
import hoistNonReactStatics from "hoist-non-react-statics";

export function withMovieContext<P>(
  Component: React.ComponentType<P>
): React.ComponentType<Omit<P, "store">> {
  const component: React.ComponentClass<P> = class extends React.Component<P> {
    render() {
      return (
        <MovieSearchStoreContext.Consumer>
          {store => <Component {...this.props} store={store} />}
        </MovieSearchStoreContext.Consumer>
      );
    }
  };
  component.displayName = Component.displayName;
  hoistNonReactStatics(component, Component);
  return (component as unknown) as React.ComponentType<Omit<P, "store">>;
}
