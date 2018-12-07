import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './src/components/Header';
import ListView from './src/components/ListView';

export default class App extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={ styles.header }>
          <Header />
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
    backgroundColor: '#5EA162',
    width: '100%',
  },
  listView: {
    flex: 1,
    backgroundColor: '#468189'
  }
});
