import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Tab1" />
      <Tabs.Screen name="Tab2" />
    </Tabs>
  );
}
