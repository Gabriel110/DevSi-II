
import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import imgBraike from '../assets/semimg.png';
const ComponeteAlimentos = (props) =>{
  const {nome, perecivel} = props;
  return(
    <View style={style.continer}>
      <Image source={imgBraike} style={style.img}/>
      <View style={style.continerText}>
        <Text style={style.TextNome}>{nome}</Text>
        <Text style={style.TextPerecivel}>{perecivel?"perecivel":"Não perecivel"}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  continer:{
    width:'90%',
    display:'flex',
    flexDirection:'row',
    margin:10,
    backgroundColor:'#49EBEA'
  },
  continerText:{
    display:'flex',
    alignItems:'flex-end',
    justifyContent:'center',
    marginLeft:10
  },
  img:{
    width:150,
    height:150,
  },
  TextNome:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
    top:-15
  },
  TextPerecivel:{
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'green',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:8,
    paddingRight:8,
    borderRadius:4
  }
});
export default ComponeteAlimentos;