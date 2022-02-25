import React, { useState } from 'react'
import { View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';

import { Header } from './Component/Screeheader'

import { Backgroundcolor, Bordercolor, Textcolor } from '../../Utility/Colors'
import { TEXT } from '../../Component/Text'
import { Cirle } from '../../Component/Cirle'
import { Card } from '../../Component/Card'

const Things = [
    {
        name: "AIA INSURANCE",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "todo"
    },
    {
        name: "AIA INSURANCE1",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "todo"
    },
    {
        name: "AIA INSURANCE2",
        desc: "Task 1 content description",
        date: "01/02/2022",
        time: "4 hours",
        type: "todo"
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

const option = [
    {
        title:"option1"
    },
    {
        title:"option2"
    },
    {
        title:"option3"
    },
]



const Tasklist = () => {
    const [open , setOpen] = useState('')

    console.log(open)
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent:"center",

        }}>
            {/* <Text>Tasklist Screeen under oriduction.......</Text> */}
        
            <Header title="" />
            <ScrollView style={{ flex: 1, width: "100%", padding: 15 ,marginTop:10}}>
                <TEXT title="Things to do (3)"
                    size={16}
                    family="Roboto-Black" 
                    color = "#0A0A0A"/>

                <View style={{ width: "100%", marginBottom: 20 }}>
                    {Things.map((item, i) => {
                        return (
                            <View style={{ marginTop: 15, width: "100%", alignItems: "center" }}>
                                <Card title={item.name}
                                    desc={item.desc}
                                    time={item.time}
                                    date={item.date}
                                    option={option}
                                    open={open}
                                    setopen={setOpen}
                                    width="100%" />
                            </View>
                        );
                    })}
                </View>


                <TEXT title="Notifications (2)"
                    size={16}
                    family="Roboto-Black" />

                <View style={{ width: "100%", marginTop: 15 ,borderRadius:5,backgroundColor:"#fff" ,padding:2}}>
                    {Things.map((item, i) => {
                        return (
                            <View style={{ width: "100%", alignItems: "center",marginBottom:8 }}>
                                <Card title={item.name}
                                    desc={item.desc}
                                    time={item.time}
                                    date={item.date}
                                    width="100%"
                                    notify={true} />
                            </View>
                        );
                    })}
                </View>


            </ScrollView>
        </View>
    );
}

export default Tasklist;