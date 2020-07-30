import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TapNavigation from './routes/Tap.js';

// React Redux 
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
  Test:"Hello From React Redux"
};

const reducer = ( state = initialState , action ) =>
{
  switch ( action.type )
  {

    case"TEST_REQUEST":
    
    return console.log( "Hello From React Redux Action" );

    default:
      return state

  }


}

const store = createStore( reducer );


export default function App() {
  return (
    <Provider store={store}>
         <TapNavigation />
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
