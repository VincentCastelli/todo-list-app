import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bold } from 'ansi-colors';

export default Header = () => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Logo</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});