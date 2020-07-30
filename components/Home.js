import React from 'react';
import { Text, View , StyleSheet} from 'react-native';


class Home extends React.Component
{
    constructor()
    {
        super();

        this.state = {
         tasbih:0,
         round:0,
         roundNumber:0,
         zero:0

         
      };
    }


    render()
    {
        return(
            <View style={Style.mainContaner}>
                <Text>
                   Kitchen
                </Text>
            </View>
        )
    }
}


export default Home;


const Style = StyleSheet.create({

    mainContaner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }


})