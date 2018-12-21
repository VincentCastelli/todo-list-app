import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default ListViewEntry = (props) => {
  return (
    <View style={ styles.listViewEntry }>
      <Text style={ styles.text }>
        { props.todos[0].description }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listViewEntry: {
    backgroundColor: '#D9D9D9',
  },
  text: {
   fontSize: 25,
  }
});