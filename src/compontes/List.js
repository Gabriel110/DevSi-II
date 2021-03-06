import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from './Card';


const produtos = [
  {
    nome: 'Aroz', valor: '20.00',
    marca: 'vasconselo',
    quantidade: 10,
    ref: '001',
    desconto: 10,
    texto: "leve 6 e pague 2"
  },
  {
    nome: 'Feijão',
    valor: '10.00',
    marca: 'cajubinha',
    quantidade: 5,
    ref: '002',
    desconto: 40,
    texto: "leve 5 e pague 4"
  },
  {
    nome: 'CuzCuz',
    valor: '2.500',
    marca: 'salada',
    quantidade: 10,
    ref: '003',
    desconto: 10,
    texto: "leve 2 e pague 4"
  },
  {
    nome: 'Macarão',
    valor: '5.00',
    marca: 'massa',
    quantidade: 13,
    ref: '004',
    desconto: 20,
    texto: "leve 1 e pague 40"
  },
  {
    nome: 'Batata',
    valor: '4.00',
    marca: 'batat',
    quantidade: 11,
    ref: '005',
    desconto: 11,
    texto: "leve 50 e pague 20"
  },

]

function List() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Produtos</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={produtos}
          keyExtractor={(produto) => produto.id}
          renderItem={(produto) => {
            return (<Card
              nome={produto.item.nome}
              valor={produto.item.valor}
              marca={produto.item.marca}
              quantidade={produto.item.quantidade}
              referencia={produto.item.ref}
              desconto={produto.item.desconto}
              texto={produto.item.texto}
            />)

          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    display: 'flex',
    flex: 1
  },
  header: {
    margin: 10,
    alignItems: 'flex-start'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
    color: 'blue'
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    margin: 4
  }
});
export default List;