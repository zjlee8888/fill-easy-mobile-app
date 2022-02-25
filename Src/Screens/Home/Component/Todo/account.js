import React, { useState } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    Pressable,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'
import { Textcolor } from '../../../../Utility/Colors';
import { Header } from '../Screeheader'
import { TEXT } from '../../../../Component/Text'
import { Icon } from 'react-native-elements';
import { BUTTON } from '../../../../Component/Button'
import { Fillin } from './Fillin';
import { Platform } from 'react-native';

import { Bottom } from '../Todo/buttoncontainer'
const data = [
    {
        name: "Service",
        color: "25%"
    },
    {
        name: "Companies",
        color: "50%"
    },
    {
        name: "Fill-in",
        color: "75%"
    },
    {
        name: "Finished!",
        color: "100%"
    },
]
const Address = [
    {
        name: "Change Residential Address",
    },
    {
        name: "Change Mailing Address",
    },
    {
        name: "Change Permanent Address",
    },
    {
        name: "Change Office Address",
    },
]
export const FillAccount = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const [open, setOpen] = useState(["Fill-address", 'Fill-in', 'Fill-Account'])
    const [Adress, setAdress] = useState(false);
    const [addressfill, setAddressfill] = useState("Change Residential Address")

    const [number , setNumber] = useState()

    return (
        // <View>

        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView keyboardVerticalOffset={100}
                behavior={(Platform.OS === 'ios') ? 'padding' : null}
                style={{ padding: "4%", }}
            >

            <View style={{ flex:1}}>
                <View style={{
                    padding: 20,
                    borderWidth: 1,
                    borderColor: '#D8D6D6',
                    borderRadius: 22,
                    backgroundColor:"#ffffff",
                    shadowColor: "rgba(0, 0, 0, 0.04)",
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 10,
                    elevation: 25,
                }}>
                   
                            <TEXT title="If you are concerned about privacy, 
                                you can fill in yourself!"
                                size={9}
                                color={'#A4A4A4'}
                                family="Roboto-Regular"
                            // weight={'bold'}
                            />
                     
                            <TEXT title="TAI SANG BANK LIMITED Account No."
                                size={14}
                                color={Textcolor.bluetext}
                                weight={'bold'}
                                style={{marginTop:10}}
                            />

                        <View style={{
                            width: '100%',
                            borderBottomWidth: 1,
                            borderBottomColor: '#DDDDDD',
                            paddingVertical:Platform.OS == "android" ? 0 : 15
                        }}>
                            <TextInput  placeholder="e.g. 123-456789-111"
                                        value={number}
                                        onChangeText={(value) => setNumber(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15,}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                                        keyboardType="numeric"
                            >
                            </TextInput>
                        </View>
                        
                   
                </View>
            </View>

            <View style={{marginTop:20,width:"100%",alignItems:"center",alignSelf:"center",marginBottom:15}}>
                    <Bottom handlebutton={props.handlebutton}
                            contiue="acc2finish"
                            back="in2add"
                            style={{ justifyContent: "space-evenly",}}/>
                    </View>
            {/* <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: "space-around",
                marginTop: 15
            }}>
                <BUTTON
                    width={"45%"}
                    height={50}
                    background={'transparent'}
                    bwidth={2}
                    bcolor={'black'}
                    bradius={50}
                    title="Back"
                    family="Roboto-Bold"
                    size={14}
                    color={'black'}
                    // press={signup}
                    press={() => props.setopen("Fill-address")}
                />

                <BUTTON
                    width={"45%"}
                    height={50}
                    background={Textcolor.yellowtext}
                    // bwidth={2}
                    // bcolor={'white'}
                    bradius={50}
                    title="Submit"
                    family="Roboto-Bold"
                    size={14}
                    color={Textcolor.blacktext}
                />
            </View> */}
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    triAngle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: Textcolor.bluetext,
    },
    triangle2: {
        backgroundColor: 'pink'
    }
})