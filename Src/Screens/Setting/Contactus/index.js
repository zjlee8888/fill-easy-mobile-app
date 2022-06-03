import React from "react";
import { View, Text, Image } from "react-native";
import { Header } from "../../Home/Component/Screeheader";

import {
  Backgroundcolor,
  Buttoncolor,
  Textcolor,
} from "../../../Utility/Colors";

import { TEXT } from "../../../Component/Text";
import { BUTTON } from "../../../Component/Button";
const Contact = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Backgroundcolor.whiteback,
      }}
    >
      <Header title3={"Contact Us"} />

      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../../../../assets/Image/logo3.jpg")}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />

        <TEXT
          title={"Let's get in touch"}
          size={25}
          color={"#0A0A0A"}
          family="Roboto-Bold"
          style={{ marginTop: 35 }}
        />

        <TEXT
          title={"Phone no."}
          size={15}
          color={"#0A0A0A"}
          family="Roboto-Bold"
          style={{ marginTop: 15, textDecorationLine: "underline" }}
        />

        <TEXT
          title={"+(852) 9340-2483"}
          size={12}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ marginTop: 10 }}
        />

        <TEXT
          title={"Email"}
          size={15}
          color={"#0A0A0A"}
          family="Roboto-Bold"
          style={{ marginTop: 15, textDecorationLine: "underline" }}
        />

        <TEXT
          title={"contact@fill-easy.com"}
          size={12}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ marginTop: 10 }}
        />

        <TEXT
          title={"Address"}
          size={15}
          color={"#0A0A0A"}
          family="Roboto-Bold"
          style={{ marginTop: 15, textDecorationLine: "underline" }}
        />

        <TEXT
          title={"1/F,Innocentre, 72 Tat Chee Ave"}
          size={12}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ marginTop: 10 }}
        />

        <BUTTON
          width={130}
          height={45}
          background={Buttoncolor.mainbluebutton}
          // bwidth={1}
          //   bcolor={Bordercolor.grayborder}
          bradius={25}
          //   shight={3}
          //   swidth={0}
          // //  scolor={Shadowcolor.shadow1}
          //   sopacity={1}
          //   elevation={5}
          title="contact us"
          size={15}
          family="Roboto-Bold"
          style={{ marginTop: 35, alignSelf: "center" }}
          color={Textcolor.whitetext}
          weight="bold"
          // press={signin}
        />
      </View>
    </View>
  );
};

export default Contact;
