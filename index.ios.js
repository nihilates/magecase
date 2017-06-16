import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './client_app/app.js'; //Entry point for all generic cross-platform development

export default class Magecase extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Magecase', () => Magecase);
