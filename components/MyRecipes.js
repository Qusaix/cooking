import React from 'react';
import { Text, View , StyleSheet} from 'react-native';


class MyRecipes extends React.Component
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
                    Hello MyRecipes !
                </Text>
            </View>
        )
    } 
}


export default MyRecipes;


const Style = StyleSheet.create({

    mainContaner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }


})