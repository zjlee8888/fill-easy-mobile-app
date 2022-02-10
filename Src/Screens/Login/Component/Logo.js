import React from 'react'
import { View, Text, Image } from 'react-native'

import { TEXT } from '../../../Component/Text'
import { Textcolor } from '../../../Utility/Colors'

export const Logo = () => {
    return (
        <View style={{ fle: 1, justifyContent: "flex-end", backgroundColor: "white", height: 170,alignItems:"center",width:"100%" }}>
            {/* <View style={{width:"80%"}}> */}
            <View style={{ flexDirection: "row",flexWrap: "wrap",alignSelf:"center",justifyContent:"center" }}>
                <TEXT title="Fill"
                    size={74}
                    color={Textcolor.yellowtext}
                    family="Poppins-Bold" />
                <TEXT title=" Easy"
                    size={74}
                    color={Textcolor.bluetext}
                    family="Poppins-Bold" />

                <TEXT title="MAKING AN ASSET OWNERSHIP EASY & SIMPLE"
                    size={10}
                    color={Textcolor.vdarkgray}
                    family="Montserrat-Regular"
                    style={{marginLeft:-55,marginTop:-20}} />
            </View>
          

            {/* </View> */}
            {/* <Image source={require("../../../../assets/Image/Logo1.png")}
             style={{ width:"90%",height:"60%" ,maxHeight:96, resizeMode:"stretch"}}/> */}
        </View>
    );
}