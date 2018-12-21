import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';

import QuickAdd from './src/components/QuickAdd';
import ListView from './src/components/ListView';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: [
        {
          time: '12:00:00',
          description: 'This is the new todo action item',
          completed: false
        },
      ],
      currentTodo: null,
    }

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) { 
    console.log(this.state.currentTodo);
    this.setState({ currentTodo: text }); 
  }

  render() {
    const { currentTodo, todoList } = this.state;

    return (
      <View style={ styles.container }> 
        <StatusBar barStyle={ 'light-content' } backgroundColor={ '#53416F' } />
        <View style={ styles.header }>
          <TouchableOpacity
            style={ styles.hashMenu }
          >
            <Text style={ styles.buttonText }>≡</Text>
          </TouchableOpacity>
          <Text style={ styles.logoText }>𝙏𝙊𝘿𝙊</Text>
          <TouchableOpacity
            style={ styles.button }
          >
            <Text style={ styles.buttonText }>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <QuickAdd 
            style={ [ styles.defaultText, styles.inputField ] }
            onChangeText={ this.onChangeText }
            value={ currentTodo }
          />
        </View>
        <View style={{flex: 1}}>
          <ListView 
            todos={ todoList }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
  },
  logoText: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 45,
    lineHeight: 55,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#735A9A',
    paddingVertical: 6,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A9A6E',
    marginRight: 5,
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  hashMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    height: 50,
    width: 50,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  }
});
