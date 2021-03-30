import React, { Fragment, useState } from 'react';
import {View, Text, StatusBar} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import CursosContext from './context/CursosContext';

const App = ()=>{
  const [nome,setNome] = useState("Gabriel Correia da Silva");
  const [curso,setCurso] = useState("Sistemas de informação");
  const [periodo,setPeriodo] = useState("7");
  const [turno,setTurno] = useState("Noturno");
  return (
    <Fragment>
     <StatusBar backgroundColor="blue"/>
      <View>
        <Header />
        <CursosContext.Provider
          value={{
            nome,
            setNome,
            curso,
            setCurso,
            periodo,
            setPeriodo,
            turno,
            setTurno
          }}
        >
          <Form/>
        </CursosContext.Provider>
      </View>
    </Fragment>
  )
}
export default App;