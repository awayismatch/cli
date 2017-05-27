/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux'
import App from './src/components/app'
import store from './src/store'
import {
    AppRegistry,
} from 'react-native';
export default class cli extends Component {
  render() {
    return (
        <Provider store={store}>
          <App/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('cli', () => cli);
