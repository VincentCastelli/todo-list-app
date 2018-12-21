import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Button';

export default Header = () => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Logo</Text>
        <Button />
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