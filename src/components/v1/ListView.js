import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, ScrollView, Dimensions } from 'react-native';

import ListEntry from './ListEntry';

const { height } = Dimensions.get('window');

export default class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenHeight: 0,
    }

    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }

  onContentSizeChange(contentWidth, contentHeight) {
    this.setState({ screenHeight: contentHeight });
  }

  render() {
    const scrollEnabled = this.state.screenHeight > height - 30;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={ 'light-content' } backgroundColor={ '#513F6D' } />
        <ScrollView 
          style={{flex: 1}}
          contentContainerStyle={styles.scrollView}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View>
            <ListEntry />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  text: {
   fontSize: 25,
  }
});