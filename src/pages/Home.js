import React, { Fragment } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Form from '../componentes/Form';
import Header from '../componentes/Header';
import { BolasaProvider } from '../context/BolsasContext';


const Home = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="green"
      />
      <Header />
      <BolasaProvider>
        <ScrollView>
          <Form />
        </ScrollView>
      </BolasaProvider>
    </Fragment>
  )
}

export default Home;