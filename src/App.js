import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import ComponeteAlimentos from './componente/ComponeteAlimentos';
import axios from 'axios';

const App = () => {
  async function axiosRespose() {
    try {
      const resp = await axios.get('http://192.168.0.108:8080/comidas');
      setComida(resp.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => { axiosRespose() }, []);
  const [comida, setComida] = useState();

  return (
    <>
      <ScrollView style={style.scrollView}>
        <View style={style.continer}>
          {
            comida && comida.map((comida,key) => {
              if (!comida) return null
              return (
                <ComponeteAlimentos
                  key={key}
                  nome={comida.nome}
                  perecivel={comida.tipoComida}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </>
  )
}
const style = StyleSheet.create({
  continer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  
});

export default App;