import React, { useEffect, useState } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import ComponeteAlimentos from './componente/ComponeteAlimentos';
import axios  from 'axios';

const App = ()=>{
  const axiosRespose = async ()=>{
    try{
      const resp = await axios.get('http://10.0.2.2:3333/comidas');
      console.log(resp.data);
    }catch(error){
      console.log(error);
    }
  }
 useEffect(()=>{axiosRespose()},[]);

  const [nome, setNome] = useState();
  const [peresivel, getPerecivek] = useState();

  console.log(nome);
  return (
    <View style={style.continer}>
      <ComponeteAlimentos
        nome="Aroz doce"
        perecivel={false}
      />
    
    </View>
  )
}
const style = StyleSheet.create({
  continer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:10
  }
});

export default App;