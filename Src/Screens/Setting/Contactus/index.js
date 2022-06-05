import React from "react";
import { View, Text, Image, Alert, Linking, TouchableOpacity } from "react-native";
import { Header } from "../../Home/Component/Screeheader";

import {
  Backgroundcolor,
  Buttoncolor,
  Textcolor,
} from "../../../Utility/Colors";

import { TEXT } from "../../../Component/Text";
import { BUTTON } from "../../../Component/Button";
const Contact = () => {

  const number = "+(852) 9340-2483"
  const mail = "contact@fill-easy.com"
  const handleSubmit = () => {
    Alert.alert("Under production.....")
  }

  const linknumber = () => {
    Linking.openURL(`tel:${number}`)

  }

  const linkmail = () => {
    Linking.openURL(`mailto:${mail}`)
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Backgroundcolor.whiteback,
      }}
    >
      <Header title3={"Contact Us"}
        styleView={{ paddingHorizontal: "8%" }} />

      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../../../../assets/Image/Logo.png")}
          style={{ width: 216, height: 154, alignSelf: "center", resizeMode: "contain" }}
        />

        <TEXT
          title={"Let’s get in touch!"}
          size={27}
          color={"#0A0A0A"}
          family="Roboto-Black"
          style={{ marginTop: 35 }}
        />


        <TEXT
          title={"Phone no."}
          size={16}
          color={"#0A0A0A"}
          family="Roboto-Black"
          style={{ marginTop: 20, textDecorationLine: "underline", lineHeight: 21 }}
        />

        <TouchableOpacity onPress={() => linknumber()}>
          <TEXT
            title={number}
            size={14}
            color={"#0A0A0A"}
            family="Roboto-Regular"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>

        <TEXT
          title={"Email"}
          size={16}
          color={"#0A0A0A"}
          family="Roboto-Black"
          style={{ marginTop: 15, textDecorationLine: "underline", lineHeight: 21 }}
        />
        <TouchableOpacity onPress={() => linkmail()}>
          <TEXT
            title={mail}
            size={14}
            color={"#0A0A0A"}
            family="Roboto-Regular"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>
        <TEXT
          title={"Address"}
          size={16}
          color={"#0A0A0A"}
          family="Roboto-Black"
          style={{ marginTop: 15, textDecorationLine: "underline", lineHeight: 21 }}
        />

        <TEXT
          title={"1/F,Innocentre, 72 Tat Chee Ave,"}
          size={14}
          color={"#0A0A0A"}
          family="Roboto-Regular"
          style={{ marginTop: 10 }}
        />
        <TEXT
          title={"Kowloon Tong"}
          size={14}
          color={"#0A0A0A"}
          family="Roboto-Regular"

        />
        <BUTTON
          width={146}
          height={50}
          background={"#2B299E"}
          // bwidth={1}
          //   bcolor={Bordercolor.grayborder}
          bradius={25}
          shight={3}
          swidth={0}
          scolor={"#00000029"}
          sopacity={1}
          elevation={5}
          title="Contact Us"
          size={14}
          family="Poppins-Bold"
          style={{ marginTop: "15%", alignSelf: "center" }}
          color={Textcolor.whitetext}

          press={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Contact;
