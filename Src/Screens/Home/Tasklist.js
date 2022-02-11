import React from 'react'
import {View , Text ,StatusBar, SafeAreaView} from 'react-native'

import {Header} from './Component/Screeheader' 

import { Backgroundcolor, Bordercolor, Textcolor } from '../../Utility/Colors'
import { TEXT } from '../../Component/Text'
import { Cirle } from '../../Component/Cirle'
import { Icon } from 'react-native-elements';

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ }}>
        <SafeAreaView style={{ backgroundColor: Backgroundcolor.yelloback }}>
            <StatusBar translucent backgroundColor={Backgroundcolor.yelloback} {...props} />
        </SafeAreaView>
    </View>
);


const Tasklist = () =>{
    return(
        <View style={{
            flex:1 , 
            alignItems:"center",
            justifyContent:"center"
            }}>
            {/* <MyStatusBar backgroundColor={Backgroundcolor.yelloback} barStyle="light-content" /> */}
            {/* <Header /> */}
            <Text>Tasklist is under production.....</Text>
        </View>
    );
}

export default Tasklist;