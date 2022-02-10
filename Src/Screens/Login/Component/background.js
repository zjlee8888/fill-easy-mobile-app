import React from 'react'
import {View , Text , Image} from 'react-native'

import {Logo} from './Logo'

export const Background = () =>{
    return(
        // <View style={{flex: 1}}>
        //     <View style={{width:"100%" , height:150,marginTop:25}}>
        //     <Logo />
        //     </View>
        //     <View style={{height:"80%" , width:"100%" , flexDirection:"row"}}>
        //         <Image source={require("../../../../assets/Image/yellow_triangle.png")}
        //                 style={{width:"50%",height:"50%",resizeMode:"stretch",marginTop:"50%"}}/>

        //         <Image source={require("../../../../assets/Image/blue_triange.png")} 
        //        style= {{width:"50%" , height:"50%",resizeMode:"stretch",}}/>

        //     </View>


        // </View>

        <View style={{flex: 1,alignItems:"center",}}>
        
        <View style={{height:"80%" , width:"102%" , flexDirection:"row" ,alignItems:"center"}}>
            <Image source={require("../../../../assets/Image/yellow_triangle.png")}
                    style={{width:"50%",height:200,resizeMode:"stretch",marginTop:"50%"}}/>

            <Image source={require("../../../../assets/Image/blue_triange.png")} 
           style= {{width:"50%" , height:233,resizeMode:"stretch",}}/>

        </View>


    </View>
    );
}