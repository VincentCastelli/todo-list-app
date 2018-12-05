import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo : 'A todo list in progress',
    }
  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.currentTodo}>{this.state.currentTodo}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5EA162',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  currentTodo: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
