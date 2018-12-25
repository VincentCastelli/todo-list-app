import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default ListViewEntry = (props) => {
  return (
    <View style={ styles.listViewEntry }>
      <Text style={ styles.text }>
        { props.todo.description }
      </Text>
      <TouchableOpacity
            style={ styles.button }
      >
        <Text style={ styles.buttonText }>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listViewEntry: {
    borderBottomWidth: 1,
    borderBottomColor: '#353535',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  text: {
    paddingTop: 10,
    fontSize: 18,
  },
  button: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 18,
  },
});