import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './src/components/Header';
import ListView from './src/components/ListView';
import UserInput from './src/components/UserInput';

export default class App extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={ styles.header }>
          <Header />
        </View>
        <View>
          <UserInput />
        </View>
        <View style={ styles.listView }>
          <ListView />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#785EA1',
    width: '100%',
  },
  listView: {
    flex: 1,
    backgroundColor: '#F2F2F3'
  }
});
