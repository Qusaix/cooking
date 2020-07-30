import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { connect } from "react-redux";


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
                    { this.props.Test }
                </Text>
            </View>
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
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }


})