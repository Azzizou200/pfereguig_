import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { LoginScreen } from "./index";
export default function TabLayouts() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
