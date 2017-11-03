/* @flow */

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Widget from './components/Widget';
import { configureStore } from './redux/store';

import type { Store, MainProps } from './types';

class Index extends PureComponent<MainProps> {
  props: MainProps;
  unsubscribe: Function;
  store: Store;

  componentWillMount() {
    const { onChangeState } = this.props;
    const store = configureStore(this.props);
    if (onChangeState) {
      this.unsubscribe = store.subscribe(() => onChangeState(store.getState()));
    }
    this.store = store;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
    <Provider store={this.store}>
      <Widget {...this.props} />
    </Provider>
    );
  }
}

export default Index;
