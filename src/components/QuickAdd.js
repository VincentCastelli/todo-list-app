import React, { Component } from 'react';
import { TextInput } from 'react-native';


export default QuickAdd = (props) => {
  return (
    <TextInput 
      style={ props.style }
      onChangeText={ props.onChangeText }
      value={ props.value }
      placeholder={'Enter a todo...'}
    />
  );
};