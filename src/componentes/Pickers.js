import React, { Fragment } from 'react';
import { StyleSheet, Picker, Text } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
const Pickers = (props) => {
  const {setCurso, titulo,intens, place} = props;

  const tempData = [];
  intens.forEach((data) => {
    tempData.push({ label: `${data.name}`, value: `${data.name}` });
  });
  
  return (
    <Fragment>
      <Text style={style.pikerText}>{titulo}</Text>
      <RNPickerSelect
        style={style.selectPicker}
        placeholder={{ label: place, value: null }}
        onValueChange={(value) => setCurso(value)}
        items={tempData}
      />
    </Fragment>
  )
};

const style = StyleSheet.create({
  selectPicker: {
    width: 300,
    height: 50,
    fontSize: 15,
    borderWidth: 1,
    margin: 0,
    borderRadius: 10,
    textAlign: 'center'
  },
  pikerText: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 10,
    margin: 0
  }
})

export default Pickers;