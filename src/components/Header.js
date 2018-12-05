import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bold } from 'ansi-colors';

export default Header = () => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Logo</Text>
        <Text style={styles.text}>Add Todo</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});