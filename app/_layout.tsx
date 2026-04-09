import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";
import { CreateTripContext } from "./../context/CreateTripContext";

export default function RootLayout() {
  useFonts({
    ZCOOL: require("./../assets/fonts/ZCOOLKuaiLe-Regular.ttf"),
    "Kalam-Bold": require("@/assets/fonts/Kalam-Bold.ttf"),
    "Kalam-Light": require("@/assets/fonts/Kalam-Light.ttf"),
    Kalam: require("@/assets/fonts/Kalam-Regular.ttf"),
  });
  const [tripData, setTripData] = useState({});
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
