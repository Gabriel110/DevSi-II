import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Picker } from 'react-native';

//import CursosContext from '../context/CursosContext';

const Form = () => {
  
  return (
    <View style={style.container}>
      <Text style={style.textH1}> Selecione os Parametros: </Text>
      <TextInput
        style={style.textInput}
        placeholder="Entre com seu nome completo"
        //onChangeText={text => setNome(text)}
      />
      <Picker
        //selectedValue={curso}
        style={style.selectPicker}
        //onValueChange={(itemValue, itemIndex) => setCurso(itemValue)}
      >
        <Picker.Item label="Curso" value="Curso" />
        <Picker.Item label="Medicina" value="Medicina" />
        <Picker.Item label="Agronomia" value="Agronomia" />
        <Picker.Item label="Fisica" value="Fisica" />
      </Picker>

      <Picker
        //selectedValue={periodo}
        style={style.selectPicker}
        //onValueChange={(itemValue, itemIndex) => setPeriodo(itemValue)}
      >
        <Picker.Item label="Periodo" value="Periodo" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>

      <Picker
        //selectedValue={turno}
        style={style.selectPicker}
        //onValueChange={(itemValue, itemIndex) => setTurno(itemValue)}
      >
        <Picker.Item label="Turno" value="Turno" />
        <Picker.Item label="Noturno" value="Noturno" />
        <Picker.Item label="Diurno" value="Diurno" />
        <Picker.Item label="Integral" value="Integralcls" />
      </Picker>

      <TextInput
        style={style.textInput}
        placeholder="Entre com sua Idade"
        //onChangeText={text => setNome(text)}
      />
      
    </View >
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textH1: {
    fontSize: 20
  },
  textInput: {
    width: 300,
    height: 50,
    fontSize: 15,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center'
  },
  selectPicker: {
    width: 300,
    height: 50,
    fontSize: 15,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center'
  }
})

export default Form;
