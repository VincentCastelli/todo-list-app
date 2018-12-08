import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: null,
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChangeText(text) { 
    console.log(this.state.currentTodo);
    this.setState({ currentTodo: text }); 
  }

  onPress() {
    // send put to database
    this.setState({ currentTodo: null });
    console.log(this.state.currentTodo);
    // get refreshed todo list
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
        <TouchableOpacity
          style={ styles.button }
          onPress={ this.onPress }
          activeOpacity= { 0.7 }
        >
         <Text style= { styles.buttonText }>✚</Text>
        </TouchableOpacity>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#5EA162',
    padding: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  }
});