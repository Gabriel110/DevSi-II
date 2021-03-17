import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BookClose from './Assets/bookcolose.png';
import BookOpem from './Assets/bokopen.jpg';


const App = () => {
  const frases = [
    "Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.",
    "A verdade é uma coisa bela e terrível, e portanto deve ser tratada com grande cautela.",
    "Quanto mais você se importa, mais você tem a perder.",
    "Não vale a pena mergulhar nos sonhos e esquecer de viver.",
    "Afinal, aquilo que amamos sempre será parte de nós."
  ]
  useEffect(() => { BookClose, BookOpem }, []);
  const [book, setBook] = useState(BookClose);
  const [frase, setFrase] = useState('Frases de Harry Potter!')

  function gerarFrazes() {
    let randomNumber = Math.floor(Math.random() * frases.length);
    let randomFrase = frases[randomNumber];

    setBook(BookOpem)
    setFrase(randomFrase);
  }

  return (
    <>
      <StatusBar backgroundColor='#841584'/>
      <View style={style.container}>
        <Image source={book} style={style.book} />
        <Text style={style.texto}>{frase}</Text>
        <TouchableOpacity onPress={gerarFrazes} style={style.btn}>
          <Text style={style.textBtn}>Gerar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  book: {
    width: 250,
    height: 250,
    margin: 40
  },
  texto: {
    fontSize: 30,
    color: "#841584",
    marginBottom: 50,
    justifyContent: 'center',
    textAlign: 'justify'
  },
  btn: {
    width: 200,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#841584',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 20
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
})


export default App;