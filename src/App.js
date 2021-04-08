import 'react-native-gesture-handler';
import React, { Fragment } from 'react';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { BolasaProvider } from './context/BolsasContext';
import { StatusBar } from 'react-native';
import Header from './componentes/Header';
import Resposta from './pages/Resposta';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="green"
      />
      <Header />
      <BolasaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} navigator={navigator}/>
            <Stack.Screen name="Resp" component={Resposta} navigator={navigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </BolasaProvider>
    </Fragment>
  )
}

export default App;