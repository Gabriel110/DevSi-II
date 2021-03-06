
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Logo from '../assets/user.png';

function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Logo} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 90,
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    marginLeft: 10
  },
});
export default Header;