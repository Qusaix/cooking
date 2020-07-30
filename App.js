import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';
import TapNavigation from './routes/Tap.js';
export default function App() {
  return (
   <TapNavigation />
   
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
