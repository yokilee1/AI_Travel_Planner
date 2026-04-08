import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    ZCOOL: require("./../assets/fonts/ZCOOLKuaiLe-Regular.ttf"),
    "Kalam-Bold": require("@/assets/fonts/Kalam-Bold.ttf"),
    "Kalam-Light": require("@/assets/fonts/Kalam-Light.ttf"),
    Kalam: require("@/assets/fonts/Kalam-Regular.ttf"),
  });
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
