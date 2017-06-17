import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    //test that the server can be called on
    fetch('http://67.207.82.217:8080/api/items')
      .then(resp => resp.json())
      .then(data => this.setState({data}))
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
