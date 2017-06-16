import React, { Component } from 'react';
import { provider } from 'react-redux';
import { createStore, applyMiddleware, combineRuxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    //test that the server can be called on
    fetch('http://67.207.82.217:8080//api/items')
      .then(resp => resp.json())
      .then(data => this.setState({data: data}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Response from Server:
        </Text>
        <Text style={styles.instructions}>
          {JSON.stringify(this.state.data)}
        </Text>
        <Text style={styles.instructions}>
          How's that then?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});