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
          id: '000009',
          time: '22:00:00',
          description: 'This is the newest todo action item created',
          completed: false
        },
        {
          id: '000008',
          time: '20:00:00',
          description: 'This is the eigth todo action item created',
          completed: false
        },
        {
          id: '000007',
          time: '20:00:00',
          description: 'This is the seventh todo action item created',
          completed: false
        },
        {
          id: '000006',
          time: '20:00:00',
          description: 'This is the sixth todo action item created',
          completed: false
        },
        {
          id: '000005',
          time: '17:00:00',
          description: 'This is the fifth todo action item created',
          completed: false
        },
        {
          id: '000004',
          time: '15:00:00',
          description: 'This is the fourth todo action item created',
          completed: false
        },
        {
          id: '000003',
          time: '13:00:00',
          description: 'This is the third todo action item created',
          completed: false
        },
        {
          id: '000002',
          time: '12:00:00',
          description: 'This is the second todo action item created',
          completed: false
        },
        {
          id: '000001',
          time: '10:00:00',
          description: 'This is the first todo action item created',
          completed: false
        }
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
        <View style={ styles.listView }>
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
    backgroundColor: '#DDDDDD',
  },
  defaultText: {
    fontSize: 22,
    padding: 10,
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
    backgroundColor: '#EEEEEE',
  },
  listView: {
    flex: 1,
    marginHorizontal: 10,
  }
});
