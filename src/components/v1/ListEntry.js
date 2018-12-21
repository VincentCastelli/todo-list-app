import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ListEntry = () => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Logo</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: '#D1CFD3',
  },
  text: {
    fontSize: 20,
  },
});