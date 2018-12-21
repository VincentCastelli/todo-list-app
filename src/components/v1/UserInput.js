import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: null,
      todoList: [],
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChangeText(text) { 
    console.log(this.state.currentTodo);
    this.setState({ currentTodo: text }); 
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput 
          style={ styles.inputField }
          onChangeText={ this.onChangeText }
          value={ this.state.currentTodo }
          placeholder={'Enter a todo...'}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputField: {
    flex: 1,
    fontSize: 20,
  },
});