import { Image, StyleSheet, Text, View } from "react-native";
import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

export default function signIn() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/bg.jpg")}
    >
      <Image
        style={styles.icon}
        source={require("../../assets/images/logo.png")}
      ></Image>
      <Text style={styles.herotitle}>Sign In!</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Hollo</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  icon: {
    marginTop: 120,
    width: 50,
    height: 50,
  },
  herotitle: {
    marginTop: 20,
    color: "#fff",
    fontSize: 48,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  card: {
    marginTop: 20,
    width: 300,

    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.3)",
    borderLeftColor: "rgba(255, 255, 255, 0.3)",
    borderRightColor: "rgba(255, 255, 255, 0.1)",
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
});
