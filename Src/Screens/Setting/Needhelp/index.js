import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "../../Home/Component/Screeheader";
import { Icon } from "react-native-elements";

import { TEXT } from "../../../Component/Text";
import { BUTTON } from "../../../Component/Button";

import {
  Backgroundcolor,
  Buttoncolor,
  Textcolor,
  Bordercolor,
} from "../../../Utility/Colors";
import { requestMultiple } from "react-native-permissions";

const faq = [
  {
    id: "0",
    titel1: "What does ",
    title2: "FillEasy ",
    title3: "do ?",
    ans: "Ths is a answerdfgdfgjdfjbgdfbjgdfjkgjkdfgjndfgjdfkgjkdfjkgdfbjkvbjdfkgbjcvbdfjkgnmvgbjtbgdfbjgtjghdfjkjjnfjdfgjk",
    type: "General Questions",
  },
  {
    id: "1",
    titel1: "How is FillEasy  ",
    title2: "free ",
    title3: "of charge ?",
    ans: "Ths is a answerdfgdfgjdfjbgdfbjgdfjkgjkdfgjndfgjdfkgjkdfjkgdfbjkvbjdfkgbjcvbdfjkgnmvgbjtbgdfbjgtjghdfjkjjnfjdfgjk",
    type: "General Questions",
  },
  {
    id: "3",
    titel1: "",
    title2: "About ",
    title3: "Filleasy?",
    ans: "Ths is a answerdfgdfgjdfjbgdfbjgdfjkgjkdfgjndfgjdfkgjkdfjkgdfbjkvbjdfkgbjcvbdfjkgnmvgbjtbgdfbjgtjghdfjkjjnfjdfgjk",
    type: "General Questions",
  },
  {
    id: "3",
    titel1: "How do I  ",
    title2: "use ",
    title3: "Filleasy ?",
    ans: "Ths is a answerdfgdfgjdfjbgdfbjgdfjkgjkdfgjndfgjdfkgjkdfjkgdfbjkvbjdfkgbjcvbdfjkgnmvgbjtbgdfbjgtjghdfjkjjnfjdfgjk",
    type: "How it's works?!",
  },
  {
    id: "4",
    titel1: "How do I know  ",
    title2: "my information ",
    title3: "Filleasy ?",
    ans: "Ths is a answerdfgdfgjdfjbgdfbjgdfjkgjkdfgjndfgjdfkgjkdfjkgdfbjkvbjdfkgbjcvbdfjkgnmvgbjtbgdfbjgtjghdfjkjjnfjdfgjk",
    type: "How it's works?!",
  },
];

const Needhelp = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Backgroundcolor.whiteback,
      }}
    >
      <Header />

      <View style={{ flex: 1, width: "100%", padding: 15 }}>
        <TEXT
          title={"FAQ"}
          size={25}
          color={"#0A0A0A"}
          family="Roboto-Bold"
          style={{ marginTop: 10 }}
        />

        <TEXT
          title={"General Questions"}
          size={15}
          color={Textcolor.bluetext}
          family="Roboto-Bold"
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        {faq.map((item, i) => {
          if (item.type == "General Questions")
            return (
              <View
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: Bordercolor.darkgrayopborder,
                  paddingVertical: 15,
                  alignItems: "center",
                }}
              >
                <TEXT
                  title={item.titel1}
                  size={14}
                  color={Textcolor.blacktext}
                  family="Roboto-Regular"
                  style={{}}
                />
                <TEXT
                  title={item.title2}
                  size={14}
                  color={Textcolor.yellowtext}
                  family="Roboto-Bold"
                  style={{}}
                />
                <TEXT
                  title={item.title3}
                  size={14}
                  color={Textcolor.blacktext}
                  family="Roboto-Regular"
                  style={{}}
                />

                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                  }}
                >
                  <TouchableOpacity>
                    <Icon name="chevron-small-down" type="entypo" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            );
        })}
      </View>
    </View>
  );
};

export default Needhelp;
