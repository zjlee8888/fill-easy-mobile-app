import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";

import { Header } from "./Component/header";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

import { Backgroundcolor, Bordercolor, Textcolor } from "../../Utility/Colors";
import { TEXT } from "../../Component/Text";
import { Circle } from "../../Component/Circle";
import { Icon } from "react-native-elements";

import { Card } from "../../Component/Card";
import { request } from "react-native-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    id: 1,
    title: "Name & ID",
    image: require("../../../assets/Image/name.png"),
    name: "account-box-outline",
    type: "material-community",
  },
  {
    id: 2,
    title: "Employment",
    name: "briefcase-outline",
    type: "ionicon",
  },
  {
    id: 3,
    title: "Address",
    name: "location",
    type: "entypo",
  },
  {
    id: 4,
    title: "Marital Status and Education",
    image: require("../../../assets/Image/muluser.png"),
    name: "account-box-multiple-outline",
    type: "material-community",
  },
  {
    id: 5,
    title: "Phone Number & Fax",
    image: require("../../../assets/Image/phone.png"),
    name: "phone-call",
    type: "feather",
  },
  {
    id: 6,
    title: "Email",
    name: "mail",
    type: "antdesign",
  },
  {
    id: 7,
    title: "Contact Person",
    name: "contacts",
    type: "antdesign",
  },
];

const Things = [
  {
    name: "AIA INSURANCE",
    desc: "Task 1 content description",
    date: "01/02/2022",
    time: "4 hours",
    type: "todo",
  },
  {
    name: "AIA INSURANCE",
    desc: "Task 1 content description",
    date: "01/02/2022",
    time: "4 hours",
    type: "todo",
  },
  {
    name: "AIA INSURANCE",
    desc: "Task 1 content description",
    date: "01/02/2022",
    time: "4 hours",
    type: "todo",
  },
  {
    name: "AIA INSURANCE",
    desc: "Task 1 content description",
    date: "01/02/2022",
    time: "4 hours",
    type: "notify",
  },
  {
    name: "AIA INSURANCE",
    desc: "Task 1 content description",
    date: "01/02/2022",
    time: "4 hours",
    type: "notify",
  },
  {
    name: "AIA INSURANCE",
    desc: "Task 1 content description",
    date: "01/02/2022",
    time: "4 hours",
    type: "notify",
  },
];

const Swipe = [
  {
    image: require("../../../assets/Image/swiper1.png"),
  },
  {
    image: require("../../../assets/Image/swiper2.png"),
  },
  {
    image: require("../../../assets/Image/swiper1.png"),
  },
  {
    image: require("../../../assets/Image/swiper2.png"),
  },
];

const Blog = [
  {
    title: "Bathroom Cleaning",
    desc: "Free Fan Cleaning & More",
    image: require("../../../assets/Image/blog.png"),
  },
  {
    title: "Bathroom Cleaning",
    desc: "Free Fan Cleaning & More",
    image: require("../../../assets/Image/blog.png"),
  },
];

const Activity = [
  {
    title: "AIA",
    desc: "Activities record content",
    time: "2 hours",
  },
  {
    title: "AIA",
    desc: "Activities record content",
    time: "2 hours",
  },
  {
    title: "AIA",
    desc: "Activities record content",
    time: "2 hours",
  },
  {
    title: "AIA",
    desc: "Activities record content",
    time: "2 hours",
  },
];

const Home = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("Name & ID");
  //  AsyncStorage.removeItem("accessToken")


  const Companies = async (data) => {
    setSelected(data);
    // navigation.navigate("TodoScreen");
  
    const token = await AsyncStorage.getItem("accessToken");

    var requestOptions = {
      Servicelinecheckbox: data,
      jwt: token,
    };

    await fetch(
      "https://fill-easy.com/serviceline/formsubmitted-choosecompany",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestOptions),
      }
    )
      .then((response) => response.json())
      .then((result) => {navigation.navigate("TodoScreen",{companiesData:result,selected:data})});
  };

  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: Backgroundcolor.yelloback }}>
        <StatusBar
          translucent
          backgroundColor={Backgroundcolor.yelloback}
          {...props}
        />
      </SafeAreaView>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F2F4F3" }}>
      <MyStatusBar
        backgroundColor={Backgroundcolor.yelloback}
        barStyle="light-content"
      />

      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ width: "100%" }}>
            <Header
              data={data}
              selected={selected}
              setSelected={setSelected}
              companies={Companies}
            />
          </View>

          <View style={{ paddingHorizontal: "5%", paddingTop: 10 }}>
            <View style={styles.toDo}>
              <TEXT
                title="Things to do :"
                size={16}
                color={Textcolor.bluetext}
                family="Roboto-Black"
              />
              <TouchableOpacity onPress={() => navigation.navigate("Tasklist")}>
                <TEXT
                  title="more >"
                  size={12}
                  color={Textcolor.bluetext}
                  family="Roboto-Regular"
                />
              </TouchableOpacity>
            </View>

            <View style={{ width: "105%", marginTop: 15 }}>
              <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row" }}>
                  {Things.map((item, i) => {
                    return (
                      <View style={{ marginRight: 15 }}>
                        <Card
                          title={item.name}
                          desc={item.desc}
                          time={item.time}
                          date={item.date}
                          width={270}
                        />
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={{ width: "100%", height: 250, marginTop: 20 }}>
            <Swiper
              activeDotColor={Backgroundcolor.yelloback}
              activeDotStyle={{ width: 24 }}
              dotColor={Backgroundcolor.whiteback}
            >
              {Swipe.map((item, i) => {
                return (
                  <View>
                    <Image
                      source={item.image}
                      style={{ width: "100%", height: 250 }}
                    />
                  </View>
                );
              })}
            </Swiper>
          </View>

          <View
            style={{
              padding: 15,
              backgroundColor: Backgroundcolor.whiteback,
              marginTop: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 15,
                justifyContent: "space-between",
              }}
            >
              <View>
                <TEXT
                  title="Blog Posts"
                  size={16}
                  color={Textcolor.bluetext}
                  family="Roboto-Black"
                />
                <TEXT
                  title="Information Description"
                  size={11}
                  color={Textcolor.grayoptext}
                  style={{ marginTop: 2 }}
                  family="Roboto-Regular"
                />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("BlogPosts")}
              >
                <TEXT
                  title="more >"
                  size={12}
                  color={Textcolor.bluetext}
                  style={{ opacity: 0.9951270222663879 }}
                  family="Roboto-Regular"
                />
              </TouchableOpacity>
            </View>

            <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
              {Blog.map((item, i) => {
                return (
                  <View style={{ marginRight: 15, alignItems: "center" }}>
                    <Image
                      source={item.image}
                      style={{ width: 263, height: 140, borderRadius: 10 }}
                    />

                    <TEXT
                      title={item.title}
                      size={13}
                      color={Textcolor.blacktext}
                      style={{ marginTop: 5 }}
                      family="Poppins-Bold"
                    />
                    <TEXT
                      title={item.desc}
                      size={11}
                      color={Textcolor.lightblack}
                      style={{ marginTop: -2, opacity: 0.6200000047683716 }}
                      family="Poppins-Medium"
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                alignItems: "center",
              }}
            >
              <TEXT
                title="Activity records"
                size={16}
                color={Textcolor.bluetext}
                family="Roboto-Black"
              />
              <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
                <TEXT
                  title="more >"
                  size={12}
                  color={Textcolor.bluetext}
                  style={{ opacity: 0.9951270222663879 }}
                  family="Roboto-Regular"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: Backgroundcolor.whiteback,
                paddingTop: 10,
              }}
            >
              {Activity.map((item, i) => {
                return (
                  <View style={styles.activity}>
                    <Circle />
                    <View style={{ marginLeft: 15 }}>
                      <TEXT
                        title={item.title}
                        size={15}
                        color={Textcolor.darkshadetext}
                        style={{ opacity: 0.6899999976158142 }}
                        family="Roboto-Black"
                      />
                      <TEXT
                        title={`(${item.desc})`}
                        size={12}
                        color={Textcolor.grayoptext}
                        family="Roboto-Regular"
                      />
                    </View>

                    <View
                      style={{
                        flex: 1,
                        marginRight: 0,
                        alignItems: "flex-end",
                      }}
                    >
                      <TEXT
                        title={item.time}
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  toDo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activity: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 15,
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Bordercolor.darkgrayopborder,
  },
});
