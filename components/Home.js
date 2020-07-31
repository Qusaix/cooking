import React from 'react';
import { View , StyleSheet , Image , FlatList  , TouchableOpacity , ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right  } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";
import * as Font from 'expo-font';


class Home extends React.Component
{
    constructor()
    {
        super();

        this.state = {
         tasbih:0,
         round:0,
         roundNumber:0,
         zero:0,
         loading:true,
         riceps:[
             { id:1 , name:"Ricep1" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
             { id:2 , name:"Ricep2" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
             { id:3 , name:"Ricep3" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
             { id:4 , name:"Ricep4" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
             { id:5 , name:"Ricep5" , image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
         ]


         
      };
    }
 

    async componentDidMount ()
    {
        //load the fonts
        await Font.loadAsync({
            Roboto: require('../fonts/Roboto-Medium.ttf'),
            Roboto_medium: require('../fonts/Roboto-Regular.ttf'), 
            ...Ionicons.font,
          });
          this.setState({loading:false});
    }


    render()
    {
        if( this.state.loading === true )
        {
            return(
                <Container>
                    <Content>
                        <Text>
                            Loading...
                        </Text>
                    </Content>
                </Container>
            )
        }

        return(
            <Container style={Style.mainContaner}>
                <Content style={Style.contentContaner} >
                {/** Lates Riceps Title */}
                <View style={Style.sectionsTitlesContaner}>
                    <Text style={Style.sectionsTitles} > Latest Has Been Added </Text>
                </View>
                {/** Lates Riceps Title */}   

                    <FlatList 
                        horizontal={true}
                        data={this.state.riceps}
                        renderItem={({item,index})=>{
                            return(
                                <TouchableOpacity onPress={()=>{this._chosen_plan(item)}} >
                                    <ImageBackground  source={{uri: item.image}} key={index} style={Style.cards}>
                                        <Text style={Style.card_title}>
                                            {item.name}
                                        </Text>
                                    </ImageBackground >
                                </TouchableOpacity>
                            )
                        }}
                    />
                </Content>
            </Container>
        )
    }
}


function mapStateToProps ( state )
{
    return{
        Test:state.Test
    }
}

function mapDispatchToProps( dispatch )
{
    return{
        TEST_REQUEST:()=>dispatch({'type':'TEST_REQUEST'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);


const Style = StyleSheet.create({

    mainContaner:{
        // flex:1,
        // justifyContent:"center",
        // alignItems:"center"
      //  marginTop:"10%"
    },
    contentContaner:{
        marginTop:"10%"
    },
    cards:{
        backgroundColor:"orange",
        height:150,
        marginHorizontal:3,
        width:100,
        justifyContent:"center",
        flex:1,
        alignItems:"center",
        borderRadius:9
    },
    card_title:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:12,
        backgroundColor:"orange",
        padding:10,

    },
    sectionsTitlesContaner:{

        backgroundColor:"orange",
        marginBottom:"5%",
        marginLeft:"2%",
        width:"50%",
        padding:"1%"

    },
    sectionsTitles:{
        color:"#fff",
        fontFamily:"Roboto",
    }



})