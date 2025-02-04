import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/bg.jpg")}
    >
      <View style={styles.iconholder}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.icon}
        ></Image>
        <Text style={{ color: "#fff", marginLeft: 20, fontSize: 48 }}>
          OPath
        </Text>
      </View>
      <Text style={{ color: "gray", marginTop: 20 }}>
        Start your journey with us
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#000", TextAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconholder: {
    marginTop: 200,
    flexDirection: "row",
    flex: 0,
    width: "100%",
    height: "70",
    backgroundColor: "",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    width: 130,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
