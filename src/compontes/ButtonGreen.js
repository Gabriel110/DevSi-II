import React from 'react';

import { StyleSheet, View, Text } from 'react-native';


function ButtonGreen({ children }) {
  return (
    <View style={styles.coiteiner}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  coiteiner: {
    width: 150,
    height: 30,
    backgroundColor: '#d98a14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600'
  }
})


export default ButtonGreen;