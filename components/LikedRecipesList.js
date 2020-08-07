import React from "react";
import { View , StyleSheet , Image , FlatList  , TouchableOpacity , ImageBackground } from 'react-native';
import { Container, Content, Text, Input, Label , Item , Form , Header , Left , Body , Title , Button , Right  } from 'native-base';
import { Ionicons , MaterialIcons , Entypo } from '@expo/vector-icons';

import { connect } from "react-redux";
import { createStore } from "redux";


class LikedRecipesList extends React.Component
{
    constructor()
    {
        super()

        this.state = {
            riceps:[
                { id:1 , name:"Ricep1" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
                { id:2 , name:"Ricep2" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
                { id:3 , name:"Ricep3" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
                { id:4 , name:"Ricep4" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
                { id:5 , name:"Ricep5" , time:"5min" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
            ],
        }
    }


    _chosen_plan = ()=>{
        return this.props.navigation.navigate('Recipe');
    }


    render(){
        return(
            <Container>
                        <Header
                        style={{
                            backgroundColor:"orange"
                        }}
                        androidStatusBarColor={ "orange" }
                        >
                        <Left>
                            <Button hasText transparent>
                            <Entypo name={"heart"}  size={25} color={"#fff"} />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Liked Items Riceps</Title>
                        </Body>
                       
                        </Header>
                        <FlatList 
                            data={this.state.riceps}
                            renderItem={({item,index})=>{
                                return(
                                    <TouchableOpacity onPress={()=>{this._chosen_plan(item)}}  style={Style.ItemContaner} >
                                        <Image  source={{uri: item.image}} key={index} style={Style.image} />
                                            <View style={Style.cardInfo}>

                                                   <Text style={ Style.ItemText }> Name: {item.name} </Text> 
                                                   <Text style={ Style.ItemText }> Country: {item.name} </Text> 
                                                   <Text style={ Style.ItemText }> Time: {item.name} </Text> 
                                                   <Text style={ Style.ItemText }> Remove</Text> 

                                            </View>
                                    </TouchableOpacity>
                                    )
                                }}

                                style={{marginTop:"3%" , marginLeft:"5%" }}      
                        />

            </Container>
        )
    }
}

const Style = StyleSheet.create({
    image:{
        backgroundColor:"orange",
        marginHorizontal:3,
        width:150,
        height:150,
        borderRadius:9
    },
    cardInfo:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
        backgroundColor:"orange",
        padding:10,
        width:"50%"

    },
    sectionsTitlesContaner:{

        backgroundColor:"orange",
        marginBottom:"5%",
        marginLeft:"2%",
        width:"65%",
        padding:"1%"

    },
    sectionsTitles:{
        color:"#fff",
        fontFamily:"Roboto",
    },
    ItemContaner:{
        flexDirection:"row",
        width:"100%",
        marginTop:"2%"
    },
    ItemText:{
        color:"#fff",

    }
})


function mapStateToProps ( state )
{
    return{
        Test:state.Test
    }
}

function mapDispatchToPorps ( dispatch )
{
    return{
        TEST_REQUEST:()=>dispatch({ "type":"TEST_REQUEST" })
    }
}






export default connect( mapStateToProps , mapDispatchToPorps )(LikedRecipesList);