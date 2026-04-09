import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Redirect href={"/(tabs)/mytrip"} />
      {/* {user ? <Redirect href={"/(tabs)/mytrip"} /> : <Login />} */}
    </View>
  );
}
