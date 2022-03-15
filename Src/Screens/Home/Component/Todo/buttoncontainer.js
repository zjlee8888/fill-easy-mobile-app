import React from "react";
import { View, Text, Dimensions } from "react-native";

import { BUTTON } from "../../../../Component/Button";
import { Textcolor } from "../../../../Utility/Colors";

const windowWidth = Dimensions.get("screen").width;

console.log(windowWidth);
export const Bottom = (props) => {
  const formDownload = (type) => {
    switch (type) {
      case "con":
        return "Continue";
      case "send":
        return "Send(1)";
      case "submit":
        return "Submit";
        case "Save":
          return "Save";
      default:
        return "Continue";
    }
  };

  const { contiue, FillAccount, type, Company, back, style } = props;
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        ...style,
      }}
    >
        <View style={{borderRadius:50,elevation:5,backgroundColor:'rgba(234, 234, 232, 1)'}}>
      <BUTTON
        width={windowWidth < 330 ? 135 : 146}
        height={50}
        background={Company?"rgba(43, 41, 158, 1)":'white'}
        bwidth={2}
        bcolor={Company ? "white" : "black"}
        bradius={50}
        title={Company ? "Search Now" : "Back"}
        family="Poppins-Bold"
        size={14}
        color={Company ? "white" : "black"}
        press={() => props.handlebutton(back)}
        activeopacity={0.9}
        style={{
          shadowColor: "rgba(0, 0, 0, 0.16)",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.6,
          shadowRadius: 5,
          elevation: 25,
        }}
      />
</View>
      <View
        style={{ elevation: 5, backgroundColor: "white", borderRadius: 50 }}
      >
        <BUTTON
          width={windowWidth < 330 ? 135 : 146}
          height={50}
          background={type == "send" || type=="Save"? "#EB632E" : Textcolor.yellowtext}
          bradius={50}
          title={formDownload(type)}
          family="Poppins-Bold"
          size={14}
          color={type == "send" || type=="Save"? Textcolor.whitetext : Textcolor.blacktext}
          press={() => {
            props.handlebutton(contiue);
          }}
          style={{
            shadowColor: "rgba(0, 0, 0, 0.16)",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.6,
            shadowRadius: 3,
            elevation: 25,
          }}
        />
      </View>
    </View>
  );
};
