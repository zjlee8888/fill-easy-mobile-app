import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Component/Screeheader";
import { Textcolor } from "../../Utility/Colors";
import { Icon } from "react-native-elements";
import { TEXT } from "../../Component/Text";

const ImageShow = [
  {
    name: "Welcome on Board",
    image: require("../../../assets/Image/BlogPostimg1.png"),
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Praesent eu malesuada odio, nec facilisis ipsum.Nunc ac tristique justo.",
  },
  {
    name: "Get $250 When You…",
    image: require("../../../assets/Image/BlogPostimg1.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu malesuada odio, nec facilisis ipsum. Nunc ac tristique justo.",
  },
  {
    name: "Welcome on Board",
    image: require("../../../assets/Image/BlogPostimg1.png"),
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Praesent eu malesuada odio, nec facilisis ipsum.Nunc ac tristique justo.",
  },
];

//components
const TodoScreen = () => {
  const navigation = useNavigation();
  const [Htitle3, setHtitle3] = useState("Blog Posts");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Header title3={Htitle3} />
        {ImageShow.map((item, i) => {
          return (
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Image source={item.image} />
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View
                  style={{
                    width: 280,
                  }}
                >
                  <TEXT
                    title={item.name}
                    size={15}
                    color={"black"}
                    weight={"bold"}
                  />
                </View>
                <TouchableOpacity>
                  <TEXT
                    title="more >"
                    size={12}
                    color={Textcolor.bluetext}
                    family="Roboto-Regular"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 325,
                  marginTop: 10,
                }}
              >
                <TEXT
                  style={{
                    lineHeight: 25,
                  }}
                  title={item.description}
                  size={15}
                  color={"#555555"}
                  family="Roboto-Regular"
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TodoScreen;
