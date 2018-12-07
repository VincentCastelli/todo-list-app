import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenHeight: 0,
    }

    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  }

  render() {
    const scrollEnabled = this.state.screenHeight > height - 30;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={ 'light-content' } backgroundColor={ '#417A44' } />
        <ScrollView 
          style={{flex: 1}}
          contentContainerStyle={styles.scrollView}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View>
            <Text style={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
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