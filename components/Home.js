import React from 'react';
import { View , StyleSheet , Image , FlatList  , TouchableOpacity , ImageBackground } from 'react-native';
import { Container, Content, Text, Input, Label , Item , Form } from 'native-base';
import { Ionicons , MaterialIcons , Entypo } from '@expo/vector-icons';
import { connect } from "react-redux";
import * as Font from 'expo-font';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';


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
        search_input:"",


         
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


        // GETING THE LAST FIVE ELEMET FROM THE ARRAY
        let amount_of_items = 5;
        let latest_five_recipes = this.props.all_recipes.slice(0, amount_of_items);



        // GET LATEST FIVE RECIPES
        this.props.GET_LATEST_FIVE_RECIPES( latest_five_recipes );


        this.setState({loading:false});

    }


    chosen_item = ( index )=>{
        this.props.GET_ITEM(  this.props.all_recipes[index] );
        this.props.GET_INGREDIENS_WITH_METHODS( index );
        return this.props.navigation.navigate('Recipes');
    }


    render()
    {
        // filter the ricpes results
        let all_ricpes = this.props.all_recipes.filter(
            ( ricpe )=>{
                return ricpe.name.toLowerCase().indexOf(this.state.search_input.toLowerCase()) !== -1;
            }
        )

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

                    {/* <Image source={{uri:"https://www.wallpapers4u.org/wp-content/uploads/cheeseburger_sandwich_fast_food_1446_1920x1080.jpg"}} style={{ width:"100%" , height:150, alignSelf:"center" , marginBottom:"2%" }} /> */}
                    <ImageBackground  source={{uri: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"}}  style={{ width:"100%" , height:150, alignSelf:"center" , marginBottom:"5%" , alignItems:"center" , justifyContent:"center"}} >
                        <Text style={{ backgroundColor:"orange" , color:"#fff" , fontSize:30 , borderRadius: 9 , backgroundColor: 'transparent'}}>
                        Welocme To The Kitchen
                        </Text>
                        <Text style={{ backgroundColor:"orange" , color:"#fff" , fontSize:15 , borderRadius: 9 , backgroundColor: 'transparent'}}>
                        New Riceps every month
                        </Text>
                     </ImageBackground >

                    {/** Lates Riceps Title */}
                    <View style={Style.sectionsTitlesContaner}>
                        <Text style={Style.sectionsTitles} > Latest Riceps Has Been Added </Text>
                    </View>
                    {/** Lates Riceps Title */}   

                    {/** Lates Riceps */}
                        <FlatList 
                            horizontal={true}
                            data={this.props.latest_recipes}
                            renderItem={({item,index})=>{
                                return(
                                    <TouchableOpacity  onPress={()=>{return this.chosen_item(index)}} >
                                        <ImageBackground  source={{uri: item.image}} key={index} style={Style.cards}>
                                            <Text style={Style.card_title}>
                                                    {item.name}
                                            </Text>
                                        </ImageBackground >
                                    </TouchableOpacity>
                                    )
                                }}
                        />
                    {/** Lates Riceps */}

                    { /** Ad Section */ }
                    <View style={{ flex:1 , alignItems:"center" , marginTop:"5%" }}>
                        <AdMobBanner
                        bannerSize="largeBanner"
                        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                        servePersonalizedAds // true or false
                        onDidFailToReceiveAdWithError={this.bannerError} 
                        />
                    </View>
                    { /** Ad Section */ }
                    <Form>
                        <Item>
                            <MaterialIcons active name='search' style={{ fontSize:25 }} onPress={()=>{return alert("Hello")}} />
                            <Input onChangeText={(value)=>{return this.setState({search_input:value})}} placeholder='Search for Riceps'/>
                        </Item>        
                    </Form>
                    
                    <View style={{ marginTop:"3%" , marginLeft:"1%" , flexDirection:"row" , flexWrap:"wrap"}}>

                        { all_ricpes.map((item , index)=>{
                            return(
                                <TouchableOpacity  onPress={()=>{return this.chosen_item(index)}} style={{ width:"30%" , height: 130 , borderWidth:0.5 , borderColor:"gray"  , margin:"1%" }}>
                         
                                <ImageBackground  source={{uri: item.image}}  style={{ height:100 }}>
                                    <Text style={Style.card_title}>
                                    { item.name }
                                    </Text>
                                </ImageBackground >

                            
                                <View style={{ flexDirection:"row" }}>
                                <Entypo name="time-slot" size={10} color="black"  style={{ padding:5 }}/>
                                    <Text style={{ padding:5 , fontSize: 10 }}>
                                        { item.time }
                                    </Text>
                                </View>
                              


                        </TouchableOpacity>
                            )
                        })}
                        
                       
                    
                        
                        
                       

                    </View>

                   

                </Content>

            </Container>
        )
    }
}


function mapStateToProps ( state )
{
    return{
        Test:state.Test,
        latest_recipes:state.latest_recipes,
        all_recipes:state.all_recipes
    }
}

function mapDispatchToProps( dispatch )
{
    return{
        TEST_REQUEST:()=>dispatch({'type':'TEST_REQUEST'}),
        GET_LATEST_FIVE_RECIPES:( recipes )=>dispatch({'type':'GET_LATEST_FIVE_RECIPES','recipes':recipes}),
        GET_ITEM:( item )=>dispatch({ 'type':'GET_ITEM', 'item':item }),
        GET_INGREDIENS_WITH_METHODS:( index ) =>dispatch({ 'type':'GET_INGREDIENS_WITH_METHODS' , 'index':index })
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
        fontSize:10,
        backgroundColor:"orange",
        padding:10,

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
    }



})