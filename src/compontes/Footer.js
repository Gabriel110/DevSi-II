
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function Footer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#615d57",
    height: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    fontSize: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
});
export default Footer;