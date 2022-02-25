import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    Pressable,
    ScrollView
} from 'react-native'
import { Textcolor } from '../../Utility/Colors';
import { Backgroundcolor } from '../../Utility/Colors';
import {Header} from '../Home/Component/Screeheader'

import { Bordercolor } from '../../Utility/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TEXT } from '../../Component/Text'

import { Cirle } from '../../Component/Cirle'

const Activity = [
    {
        title: "AIA",
        desc: "Activities record content",
        time: "12 hours"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "14 hours"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "17 hours"
    },

]

const Activity2 = [
    {
        title: "AIA",
        desc: "Activities record content",
        time: "02 Jan"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "02 Jan"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "02 Jan"
    },

]

const ActivityRecord = (props) => {


    const [open, setOpen] = useState(["Fill-address", 'Fill-in', 'Fill-Account',
        'Form-Download', 'Activity-Address'])

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{
            flex: 1, width: "100%",
            backgroundColor: '#F2F4F3',
            
        }}>
            <Header />
            <View style={{
                width: "100%",
             
            }}>
                <View style={{
                    padding:15,
                    marginTop:15,
                    justifyContent: "center",
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: "space-between",
                   
                }}
                >
                    <View style={{}}>
                        <TEXT
                            title={'Activity Records'}
                            size={16}
                            color={Textcolor.blacktext}
                            family="Roboto-Black"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            // height: 50,
                            // borderWidth: 1,
                            flexDirection: 'row',
                            marginRight: 15,
                        }}>
                        <Icon
                            color='rgba(164, 164, 164, 1)'
                            name="filter"
                            type="antdesign"
                            size={12} />
                        <TEXT size={12}
                            title="Filter"
                            color="rgba(164, 164, 164, 1)"
                            family="Roboto-Regular"
                            style={{ marginLeft: 5 }}
                        />

                        {modalVisible &&
                            <View style={{
                                height: 70,
                                position: "absolute",
                                marginTop: 30,
                                width: 95,
                                backgroundColor: "white",
                                borderRadius: 8,
                                marginLeft: -48,
                                shadowColor: "rgba(70, 88, 131, 0.13)",
                                shadowOffset: {
                                    width: 0,
                                    height: 4
                                },
                                shadowOpacity: 0.6,
                                shadowRadius: 4,
                                elevation: 25,
                                padding: 10
                            }}>
                                <TouchableOpacity style={{ marginBottom: 5 }}>
                                    <TEXT size={9}
                                        title="Option 1"
                                        color="rgba(164, 164, 164, 1)"
                                        family="Roboto-Regular"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginBottom: 5 }}>
                                    <TEXT size={9}
                                        title="Option 2"
                                        color="rgba(164, 164, 164, 1)"
                                        family="Roboto-Regular"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginBottom: 5 }}>
                                    <TEXT size={9}
                                        title="Option 3"
                                        color="rgba(164, 164, 164, 1)"
                                        family="Roboto-Regular"
                                    />
                                </TouchableOpacity>



                            </View>
                        }
                    </TouchableOpacity>
                </View>
                
                <View style={{zIndex: -1,
                }}>
                    <View style={{
                        backgroundColor: Backgroundcolor.whiteback,
                        paddingTop: 10,
                    }}>
                        {Activity.map((item, i) => {
                            return (
                                <View style={{
                                    flexDirection: "row",
                                    paddingHorizontal: 20,
                                    paddingBottom: 15,
                                    padding: 15,
                                    alignItems: "center",
                                    borderBottomWidth: 1,
                                    borderBottomColor: Bordercolor.darkgrayopborder
                                }}>
                                    <Cirle />
                                    <View style={{ marginLeft: 15 }}>
                                        <TEXT title={item.title}
                                            size={15}
                                            color={Textcolor.darkshadetext}
                                            style={{ opacity: 0.6899999976158142 }}
                                            family="Roboto-Black"
                                        />
                                        <TEXT title={`(${item.desc})`}
                                            size={12}
                                            color={Textcolor.grayoptext}
                                            family="Roboto-Regular"
                                        />

                                    </View>

                                    <View style={{ flex: 1, marginRight: 0, alignItems: "flex-end" }}>
                                        <TEXT title={item.time}
                                            size={11}
                                            color={Textcolor.darkshadetext}
                                            style={{ opacity: 0.38999998569488525 }}
                                            family="Roboto-Bold"
                                        />
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>

                <View style={{
                    justifyContent: "center",
                    padding:20

                }}>
                    <TEXT
                        title={'This Month'}
                        size={16}
                        color={Textcolor.blacktext}
                        family="Roboto-Black"
                    />
                </View>

                <View style={{}}>
                    <View style={{ backgroundColor: Backgroundcolor.whiteback, paddingTop: 10 }}>
                        {Activity2.map((item, i) => {
                            return (
                                <View style={{
                                    flexDirection: "row",
                                    paddingHorizontal: 20,
                                    paddingBottom: 15,
                                    padding: 15,
                                    alignItems: "center",
                                    borderBottomWidth: 1,
                                    borderBottomColor: Bordercolor.darkgrayopborder
                                }}>
                                    <Cirle />
                                    <View style={{ marginLeft: 15 }}>
                                        <TEXT title={item.title}
                                            size={15}
                                            color={Textcolor.darkshadetext}
                                            style={{ opacity: 0.6899999976158142 }}
                                            family="Roboto-Black"
                                        />
                                        <TEXT title={`(${item.desc})`}
                                            size={12}
                                            color={Textcolor.grayoptext}
                                            family="Roboto-Regular"
                                        />

                                    </View>

                                    <View style={{ flex: 1, marginRight: 0, alignItems: "flex-end" }}>
                                        <TEXT title={item.time}
                                            size={11}
                                            color={Textcolor.darkshadetext}
                                            style={{ opacity: 0.38999998569488525 }}
                                            family="Roboto-Bold"
                                        />
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>



            </View>

        </ScrollView>
    );
}

export default ActivityRecord;
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