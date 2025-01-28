import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Splashscreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Spaceholder</Text>
    </View>
  );
}

export default Splashscreen;

const style = StyleSheet.create({
  container: {
    fontSize: 300,
    backgroundColor: "#1E319D",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontStyle: "italic",
    fontSize: 30,
  },
});
