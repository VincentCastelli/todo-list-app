import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

import ListViewEntry from './ListViewEntry';

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
    const scrollEnabled = this.state.screenHeight > height - 60;

    return (
      <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={styles.scrollView}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}
      >
        <View>
          {this.props.todos.map(todo => 
            <ListViewEntry 
              key={ todo.id }
              todo={ todo } 
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});