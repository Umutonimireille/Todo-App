import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";


import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    const navigation = useNavigation();

    const handleLogin = () =>{
      navigation.navigate("Login");
    }

  const handleRegister = () => {
    // Perform registration or validation logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("confirmPassword:", confirmPassword);
    console.log("fullname:", fullName);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Ellipse 1.png")}
        style={styles.image1}
      />
      <Image
        source={require("../assets/images/Ellipse 2.png")}
        style={styles.image2}
      />

      <View style={styles.stats}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Welcome Onboard!
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "light", marginTop: 10 }}>
          Let's help you in completing your tasks
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.allInputsHolder}>
          <View style={styles.inputHolder}>
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "0.5rem"
              }}
            >
              Full Name:
            </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#FFF"
              onChangeText={(text) => setFullName(text)}
              value={fullName}
            />
          </View>
          <View style={styles.inputHolder}>
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "0.5rem"
              }}
            >
              Email:
            </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputHolder}>
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "0.5rem"
              }}
            >
              Password:
            </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <View style={styles.inputHolder}>
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "0.5rem"
              }}
            >
              Confirm Password:
            </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.links}>
        <Text>Already Have an account ?</Text>
        <Text
          style={{
            color: "#62D2C3",
            fontWeight: "bold"
          }}
          onPress={handleLogin}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    height: 150,
    width: 150,
    position: "absolute",
    top: -20,
    left: -80,
    transform: [{ rotate: "15deg" }]
  },
  image2: {
    height: 100,
    width: 200,
    position: "absolute",
    top: -35,
    left: -40
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    marginLeft: 20
  },
  

  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    top: 30,
    paddingHorizontal: 4,
    paddingVertical: "2rem"
  },
  input: {
    width: "23rem",
    height: "3.3rem",
    borderRadius: "2rem",
    paddingHorizontal: 10,
    backgroundColor: "#fff", // Add space between input fields
    padding: 10,
    outlineStyle: "none"
  },
  inputHolder: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingHorizontal: 4
  },

  allInputsHolder: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  forgot: {
    width: "23rem"
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#62D2C3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "black",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Registration;
