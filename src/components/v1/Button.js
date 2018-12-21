import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default Button = () => {
  
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ this.onPress }
      activeOpacity= { 0.7 }
    >
      <Text style= { styles.buttonText }>✚</Text>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#5EA162',
    padding: 10,
    radius: '50%'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
})