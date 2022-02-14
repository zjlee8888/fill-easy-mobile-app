import React from 'react'
import {View , Text , TouchableOpacity, TouchableWithoutFeedbackBase} from 'react-native'
import { Icon } from 'react-native-elements';

import {TEXT} from '../../../Component/Text'
import {Backgroundcolor} from '../../../Utility/Colors'
export  const Header = (props) =>{
    const {title} = props
    return(
        <View style={{
            height:105, 
            backgroundColor:Backgroundcolor.yelloback,
            width:"100%",
            flexDirection:"row",
            alignItems:"flex-end",
            padding:20,
            justifyContent:"space-between"
            }}>
            <View>
            <Text>{title}</Text>
            </View>
            <TouchableOpacity >
                <Icon name="arrow-back"
                        type="ionicon"/>
            </TouchableOpacity>
        </View>
    );
}
