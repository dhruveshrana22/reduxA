import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import HomeScreen from './Screen/InputScreen'
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import InputScreen from './Screen/InputScreen';
import DisplayScreen from './Screen/DetailScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={InputScreen} />
            <Stack.Screen name="Display" component={DisplayScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
