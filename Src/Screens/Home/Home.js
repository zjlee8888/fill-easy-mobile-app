import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native'

import { Header } from './Component/header'
import Swiper from 'react-native-swiper'

import { Backgroundcolor, Bordercolor, Textcolor } from '../../Utility/Colors'
import { TEXT } from '../../Component/Text'
import { Cirle } from '../../Component/Cirle'
import { Icon } from 'react-native-elements';

import { Card } from '../../Component/Card'

const data = [
    {
        id: 1,
        title: "Name & ID",
        image: require("../../../assets/Image/name.png")
    },
    {
        id: 2,
        title: "Employm…",
        name: "briefcase-outline",
        type: "ionicon"
    },
    {
        id: 3,
        title: "Address",
        name: "location",
        type: "entypo"
    },
    {
        id: 4,
        title: "Martial…",
        image: require("../../../assets/Image/muluser.png")
    },
    {
        id: 5,
        title: "Phone No.",
        image: require("../../../assets/Image/phone.png")
    },
    {
        id: 6,
        title: "Email",
        name: "mail",
        type: "antdesign"
    },
    {
        id: 7,
        title: "Contact",
        name: "contacts",
        type: "antdesign"
    },
    {
        id: 8,
        title: "Beneficiary",
        image: require("../../../assets/Image/star.png")
    },

]

const Things = [
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "todo"
    },
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "todo"
    },
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "todo"
    },
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "notify"
    },
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "notify"
    },
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "notify"
    },
]

const Swipe = [
    {
        image: require("../../../assets/Image/swiper1.png")
    },
    {
        image: require("../../../assets/Image/swiper2.png")
    },
    {
        image: require("../../../assets/Image/swiper1.png")
    },
    {
        image: require("../../../assets/Image/swiper2.png")
    }
]

const Blog = [
    {
        title: "Bathroom Cleaning",
        desc: "Free Fan Cleaning & More",
        image: require("../../../assets/Image/blog.png")
    },
    {
        title: "Bathroom Cleaning",
        desc: "Free Fan Cleaning & More",
        image: require("../../../assets/Image/blog.png")
    },
]

const Activity = [
    {
        title: "AIA",
        desc: "Activities record content",
        time: "2 hours"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "2 hours"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "2 hours"
    },
    {
        title: "AIA",
        desc: "Activities record content",
        time: "2 hours"
    }
]



const Home = () => {

    const [selected, setSelected] = useState("Name & ID")

    const MyStatusBar = ({ backgroundColor, ...props }) => (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: Backgroundcolor.yelloback }}>
                <StatusBar translucent backgroundColor={Backgroundcolor.yelloback} {...props} />
            </SafeAreaView>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar backgroundColor={Backgroundcolor.yelloback} barStyle="light-content" />


            <ScrollView style={{}}>
                <View style={{ flex: 1 }}>
                    <View style={{ width: "100%" }}>
                        <Header data={data}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </View>

                    <View style={{ padding: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <TEXT title="Things to do :"
                                size={16}
                                color={Textcolor.bluetext}
                                weight={"bold"}
                                family="Poppins-Bold" 
                                />
                            <TouchableOpacity>
                                <TEXT title="more >"
                                    size={12}
                                    color={Textcolor.bluetext}
                                    family="Poppins-Regular"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "105%", marginTop: 15 }}>
                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: "row" }}>
                                    {Things.map((item, i) => {
                                        return (
                                            <View style={{ marginRight: 15}}>
                                                <Card title={item.name}
                                                    desc={item.desc}
                                                    time={item.time}
                                                    date={item.date}
                                                    width={260} />
                                            </View>
                                        );
                                    })}
                                </View>
                            </ScrollView>

                        </View>
                    </View>

                    <View style={{ width: "100%", height: 250, }}>

                        <Swiper activeDotColor={Backgroundcolor.yelloback}
                            activeDotStyle={{ width: 24 }}
                            dotColor={Backgroundcolor.whiteback} >
                            {Swipe.map((item, i) => {
                                return (
                                    <View>
                                        <Image source={item.image} style={{ width: "100%", height: 250 }} />
                                    </View>
                                );
                            })}
                        </Swiper>
                    </View>

                    <View style={{ padding: 15, backgroundColor: Backgroundcolor.whiteback, marginTop: 25 }}>
                        <View style={{ flexDirection: "row", padding: 15, justifyContent: "space-between" }}>
                            <View>
                                <TEXT title="Blog Posts"
                                    size={16}
                                    weight={"700"}
                                    color={Textcolor.bluetext} 
                                   family="Poppins-Bold"
                                    />
                                <TEXT title="Information Description"
                                    size={11}
                                    color={Textcolor.grayoptext}
                                    style={{ marginTop: 2 }} 
                                    family="Roboto-Regular"/>
                            </View>

                            <TouchableOpacity>
                                <TEXT title="more >"
                                    size={12}
                                    color={Textcolor.bluetext}
                                    style={{ opacity: 0.9951270222663879 }}
                                    family="Poppins-Regular"
                                />
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
                            {Blog.map((item, i) => {
                                return (
                                    <View style={{ marginRight: 15, alignItems: "center" }}>
                                        <Image source={item.image}
                                            style={{ width: 263, height: 140, borderRadius: 10 }} />

                                        <TEXT title={item.title}
                                            size={13}
                                            weight={"bold"}
                                            color={Textcolor.blacktext}
                                            style={{ marginTop: 5 }} 
                                            family="Poppins-Bold"/>
                                        <TEXT title={item.desc}
                                            size={11}
                                            color={Textcolor.lightblack}
                                            style={{ marginTop: 2, opacity: 0.6200000047683716 }} 
                                            family="Poppins-Regular"/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>


                    <View style={{}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                            <TEXT title="Activity records"
                                size={16}
                                weight={"700"}
                                color={Textcolor.bluetext}
                                family="Poppins-Bold" />
                            <TouchableOpacity>
                                <TEXT title="more >"
                                    size={12}
                                    color={Textcolor.bluetext}
                                    style={{ opacity: 0.9951270222663879 }}
                                    family="Poppins-Regular"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: Backgroundcolor.whiteback, paddingTop: 10 }}>
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
                                                weight={"bold"}
                                                style={{ opacity: 0.6899999976158142 }}
                                                family="Poppins-Bold"
                                            />
                                            <TEXT title={`(${item.desc})`}
                                                size={12}
                                                color={Textcolor.grayoptext}
                                                family="Poppins-Regular"
                                            />

                                        </View>

                                        <View style={{ flex: 1, marginRight: 0, alignItems: "flex-end" }}>
                                            <TEXT title={item.time}
                                                size={11}
                                                color={Textcolor.darkshadetext}
                                                weight={"500"}
                                                style={{ opacity: 0.38999998569488525 }}
                                                family="Poppins-SemiBold"
                                            />
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                </View>


            </ScrollView>





        </View>
    );
}

export default Home;


