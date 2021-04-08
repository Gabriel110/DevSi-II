import React, { useContext } from 'react';
import { Text, View, StyleSheet, Switch, Slider, TouchableOpacity } from 'react-native';
import Pickers from './Pickers';
import { Link } from '@react-navigation/native';
import BolsaContext from '../context/BolsasContext';
import InputText from './InputText';

const Form = (props) => {
  const {navigation} = props;
  const {
    nome,
    setNome,
    curso,
    setCurso,
    periodo,
    setPeriodo,
    turno,
    setTurno,
    sexo,
    setSexo,
    idade,
    setIdade,
    bolsa,
    setBolsa
  } = useContext(BolsaContext);
  return (
    <View style={style.container}>
      <Text style={style.textH1}> Selecione os Parametros: </Text>

      <InputText
        setNome={setNome}
        titulo="Nome"
        place="Entre com o seu nome"
      />
      <Pickers
        curso={curso}
        setCurso={setCurso}
        place="Selecione o Curso"
        titulo="Curso"
        intens={[
          { key: 1, name: 'Admnistração' },
          { key: 2, name: 'Ciências Contábeis' },
          { key: 3, name: 'Engenharia Mecânica' },
          { key: 4, name: 'Engenharia Elétrica' },
          { key: 5, name: 'Matemática' },
          { key: 6, name: 'Publicidade e Propaganda' },
          { key: 7, name: 'Sistemas de Informação', }
        ]}
      />
      <Pickers
        curso={periodo}
        setCurso={setPeriodo}
        place="Selecione o Periodo"
        titulo="Periodo"
        intens={[
          { key: 1, name: '1' },
          { key: 2, name: '2' },
          { key: 3, name: '3' },
          { key: 4, name: '4' },
          { key: 5, name: '5' },
          { key: 6, name: '6' },
          { key: 7, name: '7', }
        ]}
      />
      <Pickers
        curso={turno}
        setCurso={setTurno}
        place="Selecione o Turno"
        titulo="Turno"
        intens={[
          { key: 1, name: 'Integral' },
          { key: 2, name: 'Noturno' },
          { key: 3, name: 'Diurno' },
        ]}
      />
      <InputText
        setNome={setIdade}
        titulo="Idade"
        place="Entre com o sua idade"
      />
      <Pickers
        curso={sexo}
        setCurso={setSexo}
        place="Selecione o Sexo"
        titulo="Sexo"
        intens={[
          { key: 1, name: 'Masculino' },
          { key: 2, name: 'Feminio' },
        ]}
      />

      <View style={style.switchView}>
        <Text style={style.switchText}>Possui bolsa:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={bolsa ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setBolsa}
          value={bolsa}
        />
        <Text style={style.switchText}>Renda:</Text>
        <Slider
          style={{width:150}}
          minimumValue={-10}
          maximumValue={4002}
          minimumTrackTintColor='#1fb28a'
          maximumTrackTintColor='#d3d3d3'
          thumbTintColor='#1a9274'
        />
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={()=>{ navigation.navigate('Resp')}}
      >
        <Text style={style.buttonText}>Enviar</Text>
      </TouchableOpacity>
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
  switchView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  switchText: {
    margin: 4,
    fontSize: 16
  },
  button:{
    width:200,
    height:40,
    backgroundColor:"green",
    borderRadius:10,
    margin:10,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})

export default Form;
