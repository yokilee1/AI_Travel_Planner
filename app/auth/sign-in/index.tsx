import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      console.warn("Please fill in all fields");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in successfully:", user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
        if (errorCode === "auth/invalid-credential") {
          ToastAndroid.show("Invalid email or password", ToastAndroid.SHORT);
          console.warn("Invalid email or password");
        }
        // ..
      });
  };

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Ionicons
        style={{ marginTop: 40 }}
        name="arrow-back"
        size={24}
        onPress={() => router.back()}
      />
      <Text
        style={{
          fontFamily: "Kalam-Bold",
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Let's Sign In
      </Text>
      <Text
        style={{
          fontFamily: "Kalam-Regular",
          fontSize: 30,
          color: Colors.gray,
          marginTop: 25,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          fontFamily: "Kalam-Regular",
          fontSize: 30,
          color: Colors.gray,
          marginTop: 5,
        }}
      >
        You've been missed!
      </Text>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "Kalam-Regular",
          }}
        >
          Email
        </Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder="Enter Email"
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Kalam-Regular",
          }}
        >
          Password
        </Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 20,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontFamily: "Kalam-Regular",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up")}
        style={{
          padding: 15,
          backgroundColor: Colors.white,
          borderRadius: 20,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            textAlign: "center",
            fontFamily: "Kalam-Regular",
          }}
        >
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 15,
    fontFamily: "Kalam-Regular",
  },
});
