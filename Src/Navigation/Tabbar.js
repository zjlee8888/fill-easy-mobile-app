import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';
import { Backgroundcolor, Shadowcolor } from '../Utility/Colors'

export const Tabbar = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            width: "98%",
            height: 78,
            backgroundColor: Backgroundcolor.whiteback,
            borderRadius: 78,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            alignSelf: "center"
        }}>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Icon name="home"
                    type="feather"
                    size={24} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Tasklist")}>
                <Icon name="checkbox-outline"
                    type="ionicon"
                    size={24} />
                {/* <Icon name="checkbox-blank-outline"
                    type="material-community"
                    size={24} 
                    style={{marginTop:-15}}/> */}
                
            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 64,
                height: 64,
                backgroundColor: Backgroundcolor.yelloback,
                borderRadius: 64 / 2,
                alignItems: "center",
                justifyContent: "center",
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 3,
                shadowColor:Platform.OS === 'android' ? "#000" : Shadowcolor.shadow2,
                shadowOpacity: 1,
                elevation:5,
                marginBottom: 45
            }} onPress={()=>navigation.navigate("QrcodeScreen")}>
                <Image source={require("../../assets/Image/Scan.png")}
                    style={{ width: 44, height: 44 }} />
            </TouchableOpacity>



            <TouchableOpacity onPress={() =>navigation.navigate("Activity")}>
            <Icon name="history"
                    type="material-community"
                    size={24} 
                    />
                {/* <Image source={require("../../assets/Image/clipboard.png")}
                    style={{ width: 24, height: 24 }} /> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Profile")} >
            <Icon name="user"
                    type="feather"
                    size={24} 
                    />
                {/* <Image source={require("../../assets/Image/user.png")}
                    style={{ width: 24, height: 24 }} /> */}
            </TouchableOpacity>


        </View>
    );
}