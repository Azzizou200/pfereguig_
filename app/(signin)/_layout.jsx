import React from "react";
import signIn from "./signIn";
import { Stack } from "expo-router";
export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signUp" />
      <Stack.Screen name="signIn" />
    </Stack>
  );
}
