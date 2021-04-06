import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


const Header = ()=>{
 return(
  <View style={style.conteiner}>
    <Text style={style.headerText}>Solicitação de bolsa</Text>
  </View>
 );
}

const style = StyleSheet.create({
  conteiner:{
    height:70,
    backgroundColor:"green",
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  img:{
    margin:10
  },
  headerText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    marginLeft:15
  }
})
export default Header;