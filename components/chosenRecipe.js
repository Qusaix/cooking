import React from 'react'
import { View , StyleSheet , Image , FlatList  , TouchableOpacity , ImageBackground , Button } from 'react-native';
import { Container, Content, Text, Input, Label , Item , Form , Card , CardItem , Body  , Fab  } from 'native-base';
import { Ionicons , MaterialIcons , Entypo , MaterialCommunityIcons } from '@expo/vector-icons';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

import { connect } from "react-redux";

  

class ChosenRecipe extends React.Component
{

    constructor()
    {
        super();

        this.state = {
            image_url:"https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg",
            active: false
        }
    }


    render(){
        const recipe = this.props.item;
        let Image_Http_URL ={ uri:recipe.image };

        return(

            <Container>
            
                <Content style={{ marginTop:"5%"}}>


                    
                    {/** Image Section */}
                    <View style={{flex:1,flexDirection:"row" , marginLeft:"3%"}}>
                        <Image source={Image_Http_URL} style={{ height:90,width:90 , borderRadius:20 }} />
                        {/** About Recipes Section */}
                            <View style={{ marginTop:"2%" }} >
                                <Text> Name: { recipe.name }</Text>
                                <Text> Country: { recipe.country }</Text>
                                <Text> Time: { recipe.time }</Text>
                            </View>
                        {/** About Recipes Section */}
                    </View>
                    {/** Image Section */}

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

                   
                        <Card style={{ width:"90%" , alignSelf:"center" }}>
                        <CardItem>
                        <Body>
                                <Text style={{ fontSize:20 ,fontWeight:"bold" , color:"orange"}}>
                                <MaterialCommunityIcons name="food-variant" size={20}/> Ingredients
                                </Text>
                                    { this.props.current_ingrediens.map((ingredine)=>{ return (
                                     <Text style={{ fontSize:12 , fontWeight:"bold" }}> - { ingredine }</Text>
                                    )}) }
                        </Body>
                        </CardItem>
                    </Card>

                  

                    <Card style={{ width:"90%" , alignSelf:"center" }}>
                        <CardItem>
                         <Body>
                         <Text style={{ fontSize:20 ,fontWeight:"bold" , color:"orange"}}>
                           <MaterialIcons name="kitchen" size={20}/> Methods
                        </Text>
                         {this.props.current_methods.map( ( method )=>{
                             return(
                                <Text style={{ fontSize:12 , fontWeight:"bold" }}> - { method } </Text>
                             )})}
                         </Body>
                        </CardItem>
                    </Card>


                    {/* <TouchableOpacity style={{ backgroundColor:"orange" , padding:3 , marginLeft:"3%" , borderRadius:5 }}><Text style={{ color:"#fff" , fontWeight:"bold" }}> Add To Your Recipes </Text></TouchableOpacity> */}


                </Content>

                <Fab
                    active={this.state.active}
                    direction="left"
                    containerStyle={{ }}
                    style={{ backgroundColor: 'orange' }}
                    position="bottomRight"
                    onPress={() => alert("Was Added")}>
                    <MaterialCommunityIcons name="book-plus" size={20}/>
                </Fab>



            </Container>
        )
    }


}

function mapStateToPops ( state ){
    return{
        item:state.item,
        current_ingrediens:state.current_ingrediens,
        current_methods:state.current_methods,
    }
}

function mapDispatchToProps( dispatch )
{
    return{

    }
}

const Style = StyleSheet.create({
    mainContaner:{
        justifyContent:"center",
        alignItems:"center",

    }
})

export default  connect(mapStateToPops,mapDispatchToProps)(ChosenRecipe);