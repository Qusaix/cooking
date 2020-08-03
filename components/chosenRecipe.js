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
        return(

            <Container>
            
                <Content style={{ marginTop:"5%"}}>


                    
                    {/** Image Section */}
                    <View style={{flex:1,flexDirection:"row" , marginLeft:"3%"}}>
                        <Image source={{uri:this.state.image_url}} style={{ height:90,width:90 , borderRadius:20 }} />
                        {/** About Recipes Section */}
                            <View style={{ marginTop:"2%" }} >
                                <Text> Name: Cake</Text>
                                <Text> Country: Jordan</Text>
                                <Text> Time: 60min</Text>
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
                                <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 3 Eggs</Text>
                                <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 5 Cups of milk</Text>
                                <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 1 KG Rice</Text>
                                <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 1 cup Suger</Text>
                                <Text style={{ fontSize:12 , fontWeight:"bold" }}> - Apple</Text>
                        </Body>
                        </CardItem>
                    </Card>

                  

                    <Card style={{ width:"90%" , alignSelf:"center" }}>
                        <CardItem>
                         <Body>
                         <Text style={{ fontSize:20 ,fontWeight:"bold" , color:"orange"}}>
                           <MaterialIcons name="kitchen" size={20}/> Methods
                        </Text>
                        <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 3 Eggs</Text>
                        <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 5 Cups of milk</Text>
                        <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 1 KG Rice</Text>
                        <Text style={{ fontSize:12 , fontWeight:"bold" }}> - 1 cup Suger</Text>
                        <Text style={{ fontSize:12 , fontWeight:"bold" }}> - Apple</Text>
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

const Style = StyleSheet.create({
    mainContaner:{
        justifyContent:"center",
        alignItems:"center",

    }
})

export default ChosenRecipe;