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
import axios from "axios";



import { useNavigation } from "@react-navigation/native";

const Registration = () => {

const createUser = async () => {
  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    console.error("Password and Confirm Password do not match.");
    return; // Exit the function
  }

  // Create a user object with the required data
  const user = {
    full_name: fullName,
    email,
    password
  };

  try {
    // Make a POST request to your backend API to create the user
    const response = await axios.post(
      "https://lonely-dove-gear.cyclic.app/api/v1/auth/create-account",
      user
    );

    // Handle the response from the server (e.g., display a success message)
    console.log(response.data );

    // Optionally, you can navigate to a different screen after successful registration
    navigation.navigate("Login");
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error creating user:", error);
  }
}









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

        <TouchableOpacity style={styles.button} onPress={createUser}>
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
