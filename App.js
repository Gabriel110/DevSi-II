import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import { AsyncStorage } from 'react-native';
import yugioh from './assests/yugioh.jpg';

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const finishOrder = useRef(null);

  useEffect(() => {
    async function getStorage() {
      const productStorage = await AsyncStorage.getItem('quantities');

      if (productStorage) {
        setQuantity(Number(productStorage));
      }
    }
    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('quantities', quantity);
    }
    saveStorage();
  }, [quantity]);

  function focusOrder() {
    finishOrder.current.focus();
  }

  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Image
          style={styles.imagemProduto}
          source={yugioh}
        />

        <View style={styles.informacaProduto}>
          <Text style={{ fontWeight: 'bold' }}>Yu-gi-oh! Legacy Of The Duelist: Link Evolution</Text>
          <Text>Quantidade: <Text style={{ fontWeight: 'bold' }}>{quantity}</Text></Text>

          <View style={styles.adicionarProduto}>
            <TextInput
              style={styles.textInput}
              placeholder='0'
              value={quantity}
              editable={false}
            />

            <TouchableHighlight
              style={styles.adicionarBotao}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      <View style={styles.ordemBotoes}>
        <TouchableHighlight
          style={styles.utimoBotao}
          onPress={focusOrder}
        >
          <Text style={styles.butonColor}>FINALIZAR</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.btnOrdem}
          ref={finishOrder}
        >
          <Text style={styles.butonColor}>REALIZAR PEDIDO</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  cartao: {
    flexDirection: 'row',
    width: 270,
    height: 150,
    borderRadius: 8,
    borderWidth: 2
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginTop: 20
  },
  informacaProduto: {
    flexDirection: 'column',
    width: 150,
    margin: 15
  },
  adicionarProduto: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    width: 60,
    height: 30,
    padding: 5
  },
  adicionarBotao: {
    backgroundColor: '#99D178',
    width: 30,
    marginLeft: 10,
    borderRadius: 15
  },
  utimoBotao: {
    justifyContent: 'center',
    backgroundColor: '#99D178',
    width: 150,
    height: 30,
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1
  },
  ordemBotoes: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },
  btnOrdem: {
    justifyContent: 'center',
    backgroundColor: '#99D178',
    width: 150,
    height: 30,
    borderRadius: 8,
    marginTop: 400,
    alignItems: 'center'
  },
  butonColor:{ 
    fontSize: 12,
     color: '#fff', 
     fontWeight: 'bold', 
     textAlign: 'center' 
  }
});