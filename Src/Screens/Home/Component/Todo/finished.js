import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    Pressable,
    ScrollView
} from 'react-native'
import { Textcolor } from '../../../../Utility/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TEXT } from '../../../../Component/Text'
import { Fillin } from './Component/Todo/Fillin'
import { FillinAddress } from './Component/Todo/FillinAddress'
import { FillAccount } from './Component/Todo/FillAccount'
import { BUTTON } from '../../../../Component/Button'

import { Bottom } from '../Todo/buttoncontainer'
import { Alert } from 'react-native';

const data2 = [
    {
        name: "My Forms",
        type: 'ALL COMPANY FORMS',
        selected: true
    },
    {
        name: "HSBC",
        type: 'INSURANCE',
        selected: false
    },
    {
        name: "DBC",
        type: 'INSURANCE',
        selected: false
    },
    {
        name: "FUBON BANK",
        type: 'INSURANCE',
        selected: false
    },
]
export const FormDownload = (props) => {

    const [banks, setBanks] = useState([]);
    const [open, setOpen] = useState(["Fill-address", 'Fill-in', 'Fill-Account', 'Form-Download'])

    const [selected , setSelected] = useState("My Forms")
    const [used , setUsed] = useState()

    const BankOptionUI = (props) => {

        const { item } = props;


        return (
            <View style={{
                width: "100%",
                alignItems: "center",
                flexDirection: 'row',
            }}>
                <View 
                >
                    <TouchableOpacity style={{
                        borderRadius: 15,
                        borderWidth: 5,
                        borderColor: '#0000000F',
                        backgroundColor: '#0000000F',
                        //  opacity: 0.9,
                        height: 24,
                        width: 24,
                    }}
                        onPress={() => setSelected(item?.name)}>
                        <View style={{
                            width: 14,
                            height: 14,
                            backgroundColor: selected == item?.name ? '#2B299E' : '#ffffff',
                            borderRadius: 14 / 2
                        }}></View>
                    </TouchableOpacity>

                </View>
                <View style={{
                    marginLeft: 15
                }}>
                    <Icon
                        name="text-box-multiple-outline"
                        color={'black'}
                        size={50} />
                </View>
                <View style={{
                    marginLeft: 15,
                    flex: 1,
                }}>
                    
                        <TEXT
                            title={item?.name ?? ''}
                            size={16}
                            color={Textcolor.blacktext}
                            family="Roboto-Black"
                            style={numberOfLines = "1"}
                            numline={1}
                        />


                    <View style={{
                        marginTop: 5,
                    }}>
                        <TEXT title={item?.type ?? ''}
                            size={12}
                            color={'#BFBFBF'}
                            family="Roboto-Regular"
                            numline={1}
                        /></View>
                </View>

                {/* {item && !item.selected &&  */}
                <View style={{
                    width: "20%",
                    alignItems:"center",
                    justifyContent: 'flex-end',
                }}>
                    <TouchableOpacity >
                    <Icon
                        name="cloud-download-outline"
                        size={35} />
                        </TouchableOpacity>
                </View>
                {/* } */}
            </View>
        )
    }


    const recentlyused = async () => { 
        setBanks(data2);
         let selectedItem = banks.filter((bank) => bank && bank.selected);
       
         setUsed(selectedItem[0])
        // setSelected(used?.name)
        
    }

    useEffect(() => {
        setBanks(data2);
        recentlyused()
        
    }, [banks])

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{ flex: 1, width: "100%", backgroundColor:"#FFFFFF", padding:15}}>
            <View style={{
                width: "100%",
                backgroundColor: '#F2F4F3',
                borderRadius: 20,
                padding:10,
                alignItems:"center",
                
                
            }}>
                <TEXT
                    
                    title={'Thanks For Filling the Form!'}
                    size={30}
                    color={Textcolor.blacktext}
                    family="Poppins-Bold"
                    style={{marginTop:5,alignItems:'center',textAlign:'center',lineHeight:33}}
                />
                {/* <TEXT
                    title={'Filling the Form!'}
                    size={30}
                    color={Textcolor.blacktext}
                    family="Poppins-Bold"
                    style={{marginTop:0,alignItems:'center'}}
                /> */}
                <TEXT
                    style={{
                        marginTop: 10,
                    }}
                    title={'Your form is ready.'}
                    size={17}
                    color={'#808080'}
                    family="Roboto-Regular"
                />

                <View style={{
                    backgroundColor: 'white',
                    alignItems: "center",
                    paddingVertical: 18,
                    paddingHorizontal: 10,
                    // borderWidth: 1,
                    borderRadius: 10,
                    // borderColor: "rgba(70, 88, 131, 0.09)",
                    marginTop: 15,
                    zIndex: -1
                }}>

                    <BankOptionUI item={used} />
                </View>
                <View style={{
                   width:"100%",
                    marginTop: 20
                }}>
                    <TEXT
                        title={'Other Companies'}
                        size={16}
                        color={Textcolor.blacktext}
                        family="Poppins-Bold"
                        
                    />
                </View>
                <View style={{
                    backgroundColor: "white",
                    marginTop: 15,
                    width:"100%",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    paddingBottom: 15
                }}>
                    {banks.map((item) => {
                        if (item && !item.selected) {
                            return (
                                <View style={{ marginTop: 12 ,width:"100%"}}>
                                    <BankOptionUI item={item} />
                                </View>
                            )
                        }
                    }
                    )}
                </View>

                {/* <View style={{marginTop:20,width:"100%",alignItems:"center",alignSelf:"center",marginBottom:15}}>
                    <Bottom handlebutton={props.handlebutton}
                            contiue="finish"
                            type='send'
                            back="add2acc"/>
                    </View> */}


                {/* <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    marginTop: 15,
                    marginBottom:25
                }}>
                    <BUTTON
                        weight={'bold'}
                        width={"95%"}
                        height={50}
                        background={'#4CAE72'}
                        // bwidth={2}
                        // bcolor={'black'}
                        bradius={50}
                        title="Login with iAM Smart"
                        // family="Poppins-Bold"
                        size={17}
                        color={'white'}
                    // press={signup}
                    press={() => Alert.alert("Functionality Under Production")}
                    /></View> */}

            </View>
                    <View>
                        <View style={{marginTop:20,width:"100%",alignItems:"center",alignSelf:"center",marginBottom:15}}>
                    <Bottom handlebutton={props.handlebutton}
                            contiue="finish"
                            type='send'
                            back="add2acc"/>
                    </View>


                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    marginTop: 15,
                    marginBottom:25
                }}>
                    <BUTTON
                        weight={'bold'}
                        width={"95%"}
                        height={50}
                        background={'#4CAE72'}
                        // bwidth={2}
                        // bcolor={'black'}
                        bradius={50}
                        title="Login with iAM Smart"
                        // family="Poppins-Bold"
                        size={17}
                        color={'white'}
                    // press={signup}
                    press={() => Alert.alert("Functionality Under Production")}
                    /></View>
                    </View>
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