import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 获取屏幕高度
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("./../assets/images/login.jpg")}
        // 使用屏幕高度的一半
        style={{ width: screenWidth, height: screenHeight * 0.55 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Kalam-Bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "Kalam-Regular",
            fontSize: 15,
            textAlign: "center",
            color: Colors.gray,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "Kalam-Regular",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.button}>
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "Kalam-Regular",
            }}
          >
            Sign In With Google
          </Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: "25%",
  },
});
