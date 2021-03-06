import React from 'react';

import { StyleSheet, View, Text } from 'react-native';


function ButtonW({ children }) {
  return (
    <View style={styles.coiteiner}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  coiteiner: {
    width: 100,
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600'
  }
})


export default ButtonW;