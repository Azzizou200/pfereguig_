import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Splashscreen from "./splashscreen";
export default function home() {
  const [isReady, setIsReady] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("passedsplashscreen");
      setIsReady(false);
    }, 3000);
  });
  return <>{isReady ? <Splashscreen /> : <Text>Passedsplashscreen</Text>}</>;
}
