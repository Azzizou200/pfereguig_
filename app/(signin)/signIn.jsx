import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function signIn() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../assets/images/logo.png")}
      ></Image>
      <Text style={styles.herotitle}>Sign In!</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Username" style={styles.input}></TextInput>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Password" style={styles.input}></TextInput>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Password"
          onFocus={() => {}}
          style={styles.input}
        ></TextInput>

        <TouchableOpacity
          style={{
            marginTop: 20,
            height: 50,
            backgroundColor: "#000",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", TextAlign: "center" }}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.authentications}>
          <TouchableOpacity
            style={{
              marginTop: 5,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/images/communication.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 5,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/images/search.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  icon: {
    marginTop: 90,
    width: 50,
    height: 50,
  },
  herotitle: {
    marginTop: 20,
    color: "#000",
    fontSize: 48,
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  card: {
    marginTop: 20,
    width: 300,

    // borderWidth: 1,
  },
  label: {
    marginTop: 2,
    marginLeft: 5,
    color: "#000",
    fontSize: 16,
  },
  authentications: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",

    padding: 10,
  },
});
