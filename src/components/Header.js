import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logo from '../assets/user.png'

const Header = ()=>{
 return(
  <View style={style.conteiner}>
    <Image source={Logo} style={style.img}/>
  </View>
 );
}

const style = StyleSheet.create({
  conteiner:{
    height:70,
    backgroundColor:"blue",
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  img:{
    margin:10
  }
})
export default Header;