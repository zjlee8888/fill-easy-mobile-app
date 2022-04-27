import React from 'react'
import {View} from 'react-native'

import{Backgroundcolor} from '../Utility/Colors'

export const Circle = () =>{
    return(
        <View style={{width:35 , height:35 , backgroundColor:Backgroundcolor.goldback ,opacity:0.4 ,borderRadius:35/2}}></View>
    );
}