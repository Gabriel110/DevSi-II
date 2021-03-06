
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import ButtonGreen from './ButtonGreen';
import ButtonW from './ButtonW';


function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.nome}</Text>
      <View style={styles.body}>
        <Text style={styles.text}>Valor: R${props.valor}</Text>
        <Text style={styles.text}>Marca: {props.marca}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Quantidade: {props.quantidade}</Text>
        <Text style={styles.text}>Ref: {props.referencia}</Text>
      </View>
      <View style={styles.footer}>
        <ButtonW>{`${props.desconto}% desconto`}</ButtonW>
        <ButtonGreen>{props.texto}</ButtonGreen>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#615d57",
    width: 300,
    height: 150,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    fontWeight: '600',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  footer: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Card;