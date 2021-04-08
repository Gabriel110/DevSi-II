import React, { Fragment } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';

const InputText = (props) => {
  const {titulo,place,setNome} = props;
 
  return (
    <Fragment>
      <Text style={style.tituloText}>{titulo}</Text>

      <TextInput
        style={style.textInput}
        placeholder={place}
        onChangeText={text => setNome(text)}
      />
    </Fragment>
  )
}

const style = StyleSheet.create({
  textInput: {
    width: 340,
    height: 40,
    fontSize: 15,
    borderWidth: 1,
    margin: 0,
    borderRadius: 10,
    textAlign: 'center'
  },
  tituloText: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 10,
    margin: 5
  }
})

export default InputText;