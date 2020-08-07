import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LikedRecipesList from "../components/LikedRecipesList.js";
import ChosenRecipe from '../components/chosenRecipe.js';



  const LikedRecipesStack = createStackNavigator();

  export default function LikedRecipesStackComponent() {
    return (
      <LikedRecipesStack.Navigator>
        <LikedRecipesStack.Screen 
        name="Liked Recipes List" 
        component={LikedRecipesList}
        options={{headerShown: false}}
        />
         <LikedRecipesStack.Screen 
        name="Recipe" 
        component={ChosenRecipe}
        options={{headerShown: true}}
        />
      </LikedRecipesStack.Navigator>
    );
  }
  
