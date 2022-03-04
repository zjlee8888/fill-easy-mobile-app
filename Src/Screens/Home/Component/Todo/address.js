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
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { Textcolor } from '../../../../Utility/Colors';
import { Header } from '../../Component/Screeheader'
import { TEXT } from '../../../../Component/Text'
import { Icon } from 'react-native-elements';
import { BUTTON } from '../../../../Component/Button'
import { Fillin } from './Fillin';
import { FillAccount } from './FillAccount';

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
export const FillinAddress = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const [open, setOpen] = useState(["Fill-address", 'Fill-in', 'Fill-Account'])
    const [Adress, setAdress] = useState(false);
    const [addressfill, setAddressfill] = useState("Change Residential Address")

    const [flatnumber , setFlatnumber] = useState("")
    const [floor , setFloor] = useState("")
    const [block , setBlock] = useState("")
    const [building , setBuilding] = useState("")
    const [estate , setEstate] = useState("")
    const [street , setStreet] = useState("")
    const [district , setDistrict] = useState("")
    const [city , setCity] = useState("")
    const [province , setProvince] = useState("")
    const [country , setCountry] = useState("")
    const [region , setRegion] = useState("")
    const [chinese , setChinese] = useState("")
   

    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView keyboardVerticalOffset={100}
                behavior={(Platform.OS === 'ios') ? 'padding' : null}
                style={{ padding: "4%", }}
            >
                <View style={{
                    width: "100%",
                    borderWidth: 1,
                    padding: "6%",

                    alignItems: "center",
                    borderColor: 'rgba(226, 226, 226, 1)',
                    borderRadius: 22,
                    backgroundColor: "#FFFFFF",
                    shadowColor: "rgba(0, 0, 0, 0.04)",
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 10,
                    elevation: 25,
                }}>
                    <View style={{ width: "100%", }}>
                        <TEXT title="Please enter all the requested details regarding your new address."
                            size={9}
                            family="Roboto-Regular"
                            color="rgba(164, 164, 164, 1)"
                        />

                    </View>


                    <View style={{...styles.textcontainer}}>

                        <View style={{width:"50%"}}>
                            <TEXT title="Flat / Apartment"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. G, A, E"
                                        value={flatnumber}
                                        onChangeText={(value) => setFlatnumber(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)" />
                        </View>

                        <View style={{width:"50%"}}>
                            <TEXT title="Floor"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. 10/ F"
                                        value={floor}
                                        onChangeText={(value) => setFloor(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>
                    </View>

                    <View style={styles.textcontainer}>

                        <View style={{width:"50%"}}>
                            <TEXT title="Block"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. Block 5"
                                        value={block}
                                        onChangeText={(value) => setBlock(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>

                        <View style={{width:"50%"}}>
                            <TEXT title="Building"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="Name/ no."
                                        value={building}
                                        onChangeText={(value) => setBuilding(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>
                    </View>


                    <View style={styles.textcontainer}>

                        <View style={{width:"50%"}}>
                            <TEXT title="Estate"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="Name/ no."
                                        value={estate}
                                        onChangeText={(value) => setEstate(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>

                        <View style={{width:"50%"}}>
                            <TEXT title="Street"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. 19 Hollywood Road"
                                        value={street}
                                        onChangeText={(value) => setStreet(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>
                    </View>

                    <View style={styles.textcontainer}>

                        <View style={{width:"50%"}}>
                            <TEXT title="District"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. Tuen Mun"
                                        value={district}
                                        onChangeText={(value) => setDistrict(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>

                        <View style={{width:"50%"}}>
                            <TEXT title="City"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. Hong Kong"
                                        value={city}
                                        onChangeText={(value) => setCity(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>
                    </View>

                    <View style={styles.textcontainer}>

                        <View style={{width:"50%"}}>
                            <TEXT title="Province"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. Kowloon"
                                        value={province}
                                        onChangeText={(value) => setProvince(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>

                        <View style={{width:"50%"}}>
                            <TEXT title="Country"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="/."
                                        value={country}
                                        onChangeText={(value) => setCountry(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>
                    </View>


                    <View style={styles.textcontainer}>

                        <View style={{width:"50%"}}>
                            <TEXT title="Region"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="e.g. Kowloon"
                                        value={region}
                                        onChangeText={(value) => setRegion(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>

                        <View style={{width:"50%"}}>
                            <TEXT title="Chinese Address"
                                    size={14}
                                    color="rgba(43, 41, 158, 1)"
                                    weight={"bold"}/>
                            <TextInput placeholder="/."
                                        value={chinese}
                                        onChangeText={(value) => setChinese(value)}
                                        style={{marginTop:Platform.OS == "android" ? 0 :10,fontSize:15}}
                                        placeholderTextColor="rgba(0, 0, 0, 0.2)"/>
                        </View>
                    </View>


                    <View style={{ width: "100%",marginTop:10 }}>
                        <TEXT title="Please toggle the option you would like to apply this change in address to."
                            size={9}
                            family="Roboto-Regular"
                            color="rgba(164, 164, 164, 1)"
                        />

                    </View>


                    <View style={{ width:"100%" ,marginTop:10 }}>

                                {Address.map((item, i) => {
                                    return (
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 4,
                                        }}>
                                            <TouchableOpacity style={{
                                              //  marginHorizontal: 15,
                                              marginRight:15,
                                                borderRadius: 15,
                                                borderWidth: 5,
                                                borderColor: '#0000000F',
                                                backgroundColor: '#0000000F',
                                                //  opacity: 0.9,
                                                height: 24,
                                                width: 24,
                                            }}
                                                onPress={() => setAddressfill(item.name)}
                                            >
                                                <View style={{
                                                    width: 14,
                                                    height: 14,
                                                    backgroundColor: item.name == addressfill ? '#2B299E' : '#ffffff',
                                                    borderRadius: 14 / 2
                                                }}></View>
                                            </TouchableOpacity>
                                            <TEXT title={item.name}
                                                size={15}
                                                color={Textcolor.blacktext}

                                            /></View>
                                    );
                                })}
                            </View>

                </View>

                <View style={{marginTop:15,width:"100%",alignItems:"center",alignSelf:"center",marginBottom:25}}>
                    <Bottom handlebutton={props.handlebutton}
                            contiue="add2acc"
                            back="c2f"
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
                    press={() => props.setopen("Fill-in")}
                />

                <BUTTON
                    width={"45%"}
                    height={50}
                    background={Textcolor.yellowtext}
                    // bwidth={2}
                    // bcolor={'white'}
                    bradius={50}
                    title="Continue"
                    family="Roboto-Bold"
                    size={14}
                    color={Textcolor.blacktext}
                    // press={signup}
                    press={() => props.setopen("Fill-Account")}
                />
            </View> */}
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    textcontainer:{
        flexDirection: "row", 
        width: "100%", 
        borderBottomWidth: 1 ,
        borderColor:"#dddddd",
         marginBottom:2,
         marginTop:8,
        // paddingVertical:10,
         paddingVertical:Platform.OS == "android" ? 0 :15,
         
        }
})