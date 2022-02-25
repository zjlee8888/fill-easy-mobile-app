import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements';

import { Backgroundcolor, Textcolor, Buttoncolor, Bordercolor, Shadowcolor } from '../Utility/Colors'
import { Cirle } from '../Component/Cirle'
import { TEXT } from '../Component/Text'
import { BUTTON } from '../Component/Button'


export const Card = (props) => {
    const { title, desc, time, date, width, notify, open, option } = props

    const signin = () => {
        Alert.alert("Navigation Screen is under Production......")
    }
    return (
        <View style={{
            width: width,
            minHeight: 74,

            backgroundColor: Backgroundcolor.whiteback,
            borderRadius: notify ? null : 5,
            flexDirection: "row",
            padding: 10,

        }}>
            <View>
                <Cirle />
            </View>
            <View style={{ marginLeft: 10 }}>
                <TEXT title={title}
                    size={15}
                    color={Textcolor.blacktext}
                    numline={1}
                    style={{ marginBottom: 3 }}
                    family="Roboto-Black"
                />

                <TEXT title={desc}
                    size={10}
                    color={Textcolor.grayoptext}
                    style={{ marginBottom: 2 }}
                    family="Roboto-Regular"

                />
                <TEXT title={date}
                    size={10}
                    color={Textcolor.grayoptext}
                    family="Roboto-Regular"
                />
            </View>

            <View style={{ flex: 1, marginRight: 0, justifyContent: "space-between", alignItems: "flex-end", }}>
                <View style={{ flex: 1, }}>
                    {notify ?
                        <View style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
                            <TEXT title={time}
                                size={9}
                                color={Textcolor.grayoptext}
                                family="Roboto-Regular"
                                style={{ marginBottom: 10 }}
                            />
                            <Icon name="arrow-right"
                                type="feather"
                                size={15}
                                color={"#000"} />
                        </View>
                        :
                        <View style={{ width: "100%", justifyContent: "space-between", flex: 1 }}>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "flex-end", alignItems: "center" }}>
                                <TEXT title={time}
                                    size={9}
                                    color={Textcolor.grayoptext}
                                    family="Roboto-Regular"
                                />
                                <TouchableOpacity onPress={() => props.setopen(title)}>
                                    <Icon name="more-vertical"
                                        type="feather"
                                        size={15}
                                        color={Backgroundcolor.buleback} />
                                </TouchableOpacity>
                                {open === title && open !== "" &&
                                    <View style={{
                                        position: "absolute",
                                        width: 95,
                                        backgroundColor: "pink",
                                        right: 10,
                                        top: 15,
                                        shadowOffset: { width: 0, height: 3 },
                                        shadowColor: "#46588321",
                                        shadowRadius: 25,
                                        shadowOpacity: 0.9,
                                        elevation: 15,
                                        borderRadius: 5,
                                        backgroundColor: "#FFFFFF",
                                        padding: 10
                                    }}>

                                        <TouchableOpacity onPress={() => props.setopen("")}>
                                            <TEXT title="option1"
                                                size={9}
                                                color={Textcolor.grayoptext}
                                                family="Roboto-Regular"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.setopen("")}>
                                            <TEXT title="option2"
                                                size={9}
                                                color={Textcolor.grayoptext}
                                                family="Roboto-Regular"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.setopen("")}>
                                            <TEXT title="option3"
                                                size={9}
                                                color={Textcolor.grayoptext}
                                                family="Roboto-Regular"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>


                            <BUTTON width={59}
                                height={22}
                                background={Buttoncolor.mainbluebutton}
                                bcolor={Bordercolor.grayborder}
                                bradius={15}
                                shight={3}
                                swidth={0}
                                scolor={Shadowcolor.shadow1}
                                sopacity={1}
                                elevation={5}
                                title="To Do"
                                size={9}
                                color={Textcolor.whitetext}
                                weight="bold"
                                press={props.signin}
                                family="Poppins-Bold"
                                press={signin}
                                style={{ alignSelf: "flex-end", zIndex: -1 }}
                            />

                        </View>
                    }

                </View>

            </View>
        </View>
    );
}