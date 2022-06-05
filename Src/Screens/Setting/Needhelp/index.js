import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
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
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "General Questions",
  },
  {
    id: "1",
    titel1: "How is FillEasy  ",
    title2: "free ",
    title3: "of charge ?",
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "General Questions",
  },
  {
    id: "3",
    titel1: "",
    title2: "About ",
    title3: "Filleasy?",
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "General Questions",
  },
  {
    id: "4",
    titel1: "How do I  ",
    title2: "use ",
    title3: "Filleasy ?",
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "How it's works?!",
  },
  {
    id: "5",
    titel1: "How do I know  ",
    title2: "my information ",
    title3: "my information has been sent to my companies ?",
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "How it's works?!",
  },
  {
    id: "6",
    titel1: "I don't have  ",
    title2: "iAMSMART ",
    title3: "can I still use the service ?",
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "How it's works?!",
  },
  {
    id: "7",
    titel1: "Do we keep  ",
    title2: "personal ",
    title3: "data",
    ans: "Fill Easy is Hong Kong’s first centralized form filling platform! Just by filling in one form through us, you can find, fill, sign and submit information to all you use at the same time.",
    type: "Data & Privacy",
  },
];

const Needhelp = () => {
    const [select , setSelect] = useState()
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Backgroundcolor.whiteback,
      }}
    >
      <Header title3 = {"Need Help?"}
            styleView = {{paddingHorizontal : "8%"}}/>

      <ScrollView style={{ flex: 1, width: "100%" }}>
        <TEXT
          title={"FAQ"}
          size={27}
          color={"rgba(10, 10, 10, 1)"}
          family="Roboto-Black"
          style={{ marginTop: 25, margin: "8%",marginBottom : 0 }}
        />

        <TEXT
          title={"General questions"}
          size={16}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ textDecorationLine: "underline",lineHeight : 21,  marginBottom: 10, margin: "8%",marginTop:20 }}
        />
        {faq.map((item, i) => {
          if (item.type == "General Questions")
            return (
              <View style={{ width: "100%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: Bordercolor.darkgrayopborder,
                    paddingVertical: 15,
                    alignItems: "center",
                    flexWrap: "wrap",
                    alignSelf: "center",

                    width: "100%",
                    paddingHorizontal:"8%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "80%",
                      flexWrap: "wrap",
                     
                    }}
                  >
                    <TEXT
                      title={item.titel1}
                      size={16}
                      color={"#0A0A0A"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                    <TEXT
                      title={item.title2}
                      size={16}
                      color={"#FED200"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                    <TEXT
                      title={item.title3}
                      size={16}
                      color={"#0A0A0A"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                  </View>
                  <View
                    style={{
                      width: "20%",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                 
                    }}
                  >
                    <TouchableOpacity onPress={() => {select == item.id ? setSelect() :setSelect(item.id) }}>
                      <Icon name="chevron-small-down" type="entypo" size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
                {item.id == select &&
                <View
                  style={{
                    backgroundColor:"#F2F4F3",
                    paddingVertical: 15,
                    paddingHorizontal: "8%",
                    
                  }}
                >
                  <TEXT
                    title={item.ans}
                    size={14}
                    color={"#0A0A0A"}
                    family="Roboto-Regular"
                    style={{lineHeight : 19}}
                  />
                </View>
                 }
              </View>
            );
        })}

        <TEXT
          title={"How it's works?!"}
          size={16}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ textDecorationLine: "underline",lineHeight : 21,  marginBottom: 10, margin: "8%",marginTop:30 }}
        />
        {faq.map((item, i) => {
          if (item.type == "How it's works?!")
            return (
                <View style={{ width: "100%" }}>
                 <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: Bordercolor.darkgrayopborder,
                    paddingVertical: 15,
                    alignItems: "center",
                    flexWrap: "wrap",
                    alignSelf: "center",

                    width: "100%",
                    paddingHorizontal:"8%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "80%",
                      flexWrap: "wrap",
                     
                    }}
                  >
                    <TEXT
                      title={item.titel1}
                      size={16}
                      color={"#0A0A0A"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                    <TEXT
                      title={item.title2}
                      size={16}
                      color={"#FED200"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                    <TEXT
                      title={item.title3}
                      size={16}
                      color={"#0A0A0A"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                  </View>
                  <View
                    style={{
                      width: "20%",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                 
                    }}
                  >
                    <TouchableOpacity onPress={() => {select == item.id ? setSelect() :setSelect(item.id) }}>
                      <Icon name="chevron-small-down" type="entypo" size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
                {item.id == select &&
                <View
                  style={{
                    backgroundColor: Bordercolor.darkgrayopborder,
                    paddingVertical: 10,
                    paddingHorizontal: "8%",
                    
                  }}
                >
                 <TEXT
                    title={item.ans}
                    size={14}
                    color={"#0A0A0A"}
                    family="Roboto-Regular"
                    style={{lineHeight : 19}}
                  />
                </View>
                 }
              </View>
            );
        })}

        <TEXT
          title={"Data & Privacy"}
          size={16}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ textDecorationLine: "underline",lineHeight : 21,  marginBottom: 10, margin: "8%",marginTop:30 }}
        />
        {faq.map((item, i) => {
          if (item.type == "Data & Privacy")
            return (
                <View style={{ width: "100%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: Bordercolor.darkgrayopborder,
                    paddingVertical: 15,
                    alignItems: "center",
                    flexWrap: "wrap",
                    alignSelf: "center",

                    width: "100%",
                    paddingHorizontal:"8%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "80%",
                      flexWrap: "wrap",
                     
                    }}
                  >
                    <TEXT
                      title={item.titel1}
                      size={16}
                      color={"#0A0A0A"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                    <TEXT
                      title={item.title2}
                      size={16}
                      color={"#FED200"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                    <TEXT
                      title={item.title3}
                      size={16}
                      color={"#0A0A0A"}
                      family="Roboto-Black"
                      style={{ letterSpacing:0.39}}
                    />
                  </View>
                  <View
                    style={{
                      width: "20%",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                 
                    }}
                  >
                    <TouchableOpacity onPress={() => {select == item.id ? setSelect() :setSelect(item.id) }}>
                     {/* {select == item.id ? 
                     <Icon name="chevron-small-up" type="entypo" size={25} />
                     : */}
                      <Icon name="chevron-small-down" type="entypo" size={25} />
                    {/* } */}
                    </TouchableOpacity>
                  </View>
                </View>
                {item.id == select &&
                <View
                  style={{
                    backgroundColor: Bordercolor.darkgrayopborder,
                    paddingVertical: 10,
                    paddingHorizontal: "8%",
                    
                  }}
                >
                  <TEXT
                    title={item.ans}
                    size={14}
                    color={"#0A0A0A"}
                    family="Roboto-Regular"
                    style={{lineHeight : 19}}
                  />
                </View>
                 }
              </View>
            );
        })}
      </ScrollView>
    </View>
  );
};

export default Needhelp;