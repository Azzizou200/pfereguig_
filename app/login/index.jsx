import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <View
        style={{
          marginTop: 0,
        }}
      >
        <ImageBackground
          source={require("./../../assets/images/bus4.png")}
          style={{
            width: -50,
            height: 780,
          }}
        >
          <Text style={styles.box}>Opath</Text>
          <Image
            style={styles.logo}
            source={require("./../../assets/images/logo.png")}
          />
          <Text style={styles.subText}>your journey starts with us</Text>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Get strated
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View
        style={{ backgroundColor: "black", height: 600, width: 600 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    fontSize: 48,
    width: 200,
    height: 100,

    position: "absolute",
    top: 548,
    left: 178,
    color: "white",
  },
  logo: {
    width: 50,
    height: 50,

    position: "absolute",
    top: 560,
    left: 110,
    color: "white",
  },
  subText: {
    position: "absolute",
    top: 630,
    left: 110,
    color: "grey",
    fontSize: 16,
    width: 300,
    height: 100,
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    position: "absolute",
    top: 700,
    left: 150,
    color: "grey",
    fontSize: 16,
    width: 130,
    height: 45,
    borderRadius: 99,
  },
});
