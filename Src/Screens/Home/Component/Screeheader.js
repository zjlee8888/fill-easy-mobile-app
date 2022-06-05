import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Textcolor } from '../../../Utility/Colors';

import { TEXT } from '../../../Component/Text'
import { Backgroundcolor } from '../../../Utility/Colors'


export const Header = (props) => {
    const navigation = useNavigation();
    const { title, title2,title3 } = props
    return (
        <View style={{
            height: 105,
            backgroundColor: Backgroundcolor.yelloback,
            width: "100%",
            flexDirection: "row",
            alignItems: "flex-end",
            padding: 20,
            justifyContent: "space-between",
            ...props.styleView

        }}>
            <View style={{ flexDirection: "row",alignItems:"center" }}>
                {/* <Text style={{
                    fontSize: 18,
                    color: Textcolor.whitetext,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins'
                }}>{title}</Text> */}
                <TEXT title={title} 
                size={18}
                    color={Textcolor.whitetext}
                    family="Poppins-Bold"
                />
             
                <TEXT title={title2} 
                size={18}
                    color={Textcolor.bluetext}
                    family="Poppins-Bold"
                />
                <TEXT title={title3} 
                size={18}
                    color={Textcolor.blacktext}
                    family="Poppins-Bold"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back"
                    type="ionicon" />
            </TouchableOpacity>
        </View>
    );
}