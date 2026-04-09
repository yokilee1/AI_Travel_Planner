import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      console.warn("Please fill in all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User created successfully:", user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
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
        Create Account
      </Text>
      {/* full name */}
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
          Full Name
        </Text>
        <TextInput
          onChangeText={(value) => setFullName(value)}
          style={styles.input}
          placeholder="Enter Full Name"
        />
      </View>
      {/* email */}
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
          Email
        </Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder="Enter Email"
        />
      </View>
      {/* password */}
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
        onPress={OnCreateAccount}
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
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in")}
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
          Sign In
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
