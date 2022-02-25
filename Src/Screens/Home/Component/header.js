import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { TEXT } from '../../../Component/Text'

import { Backgroundcolor, Textcolor, Bordercolor } from '../../../Utility/Colors'

export const Header = (props) => {
    const { data, selected, setSelected } = props
    const navigation = useNavigation();
    return (
        <View style={{
            width: "100%",
            backgroundColor: Backgroundcolor.yelloback,

            paddingTop: "12%",
            padding: 20,
            paddingBottom: 1
        }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                <TEXT title="Fill"
                    size={39}
                    color={Textcolor.whitetext}
                    family="Poppins-Bold"
                />
                <TEXT title=" Easy"
                    size={39}
                    color={Textcolor.blacktext}
                    family="Poppins-Bold"
                />
                <View style={{ marginRight: 0, flex: 1, alignItems: "flex-end" }}>
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() =>
                             navigation.navigate("Tasklist")
                            //Alert.alert("Tasklist Screen under production....")
                        }>
                        <Icon name="bell"
                            type="fontisto"
                            size={20} />
                        <View style={{ width: 6, height: 6, backgroundColor: Backgroundcolor.dotbacground, borderRadius: 3, marginLeft: -6,marginTop:-3 }}>
                            {/* <Icon name="dot-single"
                                type="entypo"
                                size={25}
                               /> */}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <TouchableOpacity style={{
                height: 40,
                width: "100%",
                backgroundColor: Backgroundcolor.whiteback,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: 10

            }}>
                <Icon name="search"
                    type="ionicon"
                    size={16}
                    color={Bordercolor.mblue} />

                <TextInput placeholder="Search for service..."
                placeholderTextColor="rgba(183, 190, 198, 1)"
                    style={{ flex: 1, marginLeft: 10, fontFamily: "Roboto-Regular" }} />

            </TouchableOpacity>
            <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}>
                <TEXT title="1. Choose your"
                    size={18}
                    color={Textcolor.whitetext}
                    family="Poppins-Black" />
                <TEXT title=" Service"
                    size={18}
                    color={Textcolor.bluetext}
                    family="Poppins-Black" />
            </View>


            <View style={{
                padding: "2%",
                paddingRight: 0,
                backgroundColor: Backgroundcolor.whiteback,
                marginTop: 16,
                width: "112%",
                paddingLeft: "5%",
                alignSelf: "center"
            }}>
                <ScrollView style={{ width: "100%" }} horizontal={true}>
                    <View style={{ flexDirection: "row" }}>
                        {data.map((item, i) => {
                            return (
                                <View style={{ margin: 15, alignItems: "center", justifyContent: "center" }}>
                                    <TouchableOpacity style={{
                                        width: 62,
                                        height: 62,
                                        backgroundColor: selected == item.title ? Backgroundcolor.yelloback : null,
                                        borderRadius: 60 / 2,
                                        borderColor: Bordercolor.yellowborder,
                                        borderWidth: 2,
                                        alignItems: "center",
                                        justifyContent: "center", marginBottom: 5
                                    }}
                                        onPress={() => {
                                            setSelected(item.title),
                                            navigation.navigate("TodoScreen")
                                          //  Alert.alert("Navigation Screens under production.....")
                                        }}
                                    >
                                        {/* 
                                        {  item.id === 8 ?
                                            <Image source={item.image}
                                                style={{ width: 35, height: 35 }} />
                                            :
                                            (


                                                <Icon name={item.name}
                                                    type={item.type}
                                                    color={ selected == item.title ? Backgroundcolor.mainblueback : Backgroundcolor.yelloback}
                                                    size={35} />

                                            )
                                        } */}

                                        <Icon name={item.name}
                                            type={item.type}
                                            color={selected == item.title ? Backgroundcolor.mainblueback : Backgroundcolor.yelloback}
                                            size={35} />

                                    </TouchableOpacity>
                                    <TEXT title={item.title}
                                        size={11}
                                        color={selected == item.title ? Textcolor.darkblack : Textcolor.lightblack}
                                        family={selected == item.title ? "Poppins-Medium" : "Poppins-Light"}
                                    />

                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}