import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BolsaContext from '../context/BolsasContext';
const Resposta = () => {
  const {
    nome,
    curso,
    periodo,
    turno,
    sexo,
    idade,
    bolsa,
    renda
  } = useContext(BolsaContext);
  return (
    <View style={style.container}>
      <View>
        <Text style={style.textH1}>Informaçoes Inseridas: </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Nome:
          </Text> {nome}</Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Curso:
          </Text> {curso}</Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Periodo:
          </Text> {periodo}
          <Text style={{ fontWeight: 'bold' }}>
            Tueno:
          </Text>{turno}
        </Text>

        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Sexo:
          </Text> {sexo}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Bolsa:
          </Text> {bolsa ? "sim" : "não"}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Idade:
          </Text> {idade}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            Renda:
          </Text> {renda}
        </Text>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
export default Resposta;