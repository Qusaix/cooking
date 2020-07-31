import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/Home.js"

function RecipesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Recipes! it's a test function </Text>
      </View>
    );
  }
    
  function MainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  const KitchenStack = createStackNavigator();

  export default function KitchenStackComponent() {
    return (
      <KitchenStack.Navigator>
        <KitchenStack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown: false}}
        />
        <KitchenStack.Screen name="Recipes" component={RecipesScreen} />
      </KitchenStack.Navigator>
    );
  }
  
