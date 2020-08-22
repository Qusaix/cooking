import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TapNavigation from './routes/Tap.js';

// React Redux 
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
  Test:"Hello From React Redux",
  my_recipes:[
    { id:1 , name:"Ricep1" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:2 , name:"Ricep2" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:3 , name:"Ricep3" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:4 , name:"Ricep4" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:5 , name:"Ricep5" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
  ],
  all_recipes:[
    { id:1 , name:"منسف اردني " , time:"66min" ,  country:'JORDAN ', image:"https://shabab20.net/wp-content/uploads/2015/05/Jordanian-Mansaf-A.jpg" },
    { id:2 , name:"Ricep_redux_2" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:3 , name:"Ricep_redux_3" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:4 , name:"Ricep_redux_4" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:5 , name:"Ricep_redux_5" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:6 , name:"Ricep_redux_6" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:7 , name:"Ricep_redux_7" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:8 , name:"Ricep_redux_8" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:1 , name:"Ricep_redux_1" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:2 , name:"Ricep_redux_2" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:3 , name:"Ricep_redux_3" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:4 , name:"Ricep_redux_4" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:5 , name:"Ricep_redux_5" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:6 , name:"Ricep_redux_6" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:7 , name:"Ricep_redux_7" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
    { id:8 , name:"Ricep_redux_8" , time:"5min", country:'JORDAN ', image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
  ],
  methods:[
    [ "yougert" , "5 CUPS OF MILK" , "1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
    [ "3EGGS" , "5 CUPS OF MILK , 1KG RICE" , '1CUP SUGER' , 'APPLE' ],
  ],
  ingrediens:[
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
    [ 'LEAVE THE IN ON FOR 3 MIM' , 'WAIT FOR IT DONE ' , 'THATS IT :)'],
  ],
  latest_recipes:[],
  item:{},
  current_ingrediens:[],
  current_methods:[],
};
 
const reducer = ( state = initialState , action ) =>
{
  switch ( action.type )
  {

    case"TEST_REQUEST":
    
    return console.log( "Hello From React Redux Action" );

    case"GET_LATEST_FIVE_RECIPES":
    return{
      ...state,
      latest_recipes:action.recipes
    }
    case"GET_ITEM":
    return{
      ...state,
      item:action.item

    }
    case 'GET_INGREDIENS_WITH_METHODS':{
      return{
        ...state,
        current_ingrediens:state.ingrediens[action.index],
        current_methods:state.methods[action.index]
        
      }
    }

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
