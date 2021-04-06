import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import Form from '../componentes/Form';
import Header from '../componentes/Header';


const Home = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="green"
      />
      <Header/>
      <Form/>
    </Fragment>
  )
}

export default Home;