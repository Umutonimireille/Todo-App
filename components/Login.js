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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Login = () => {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

       const navigation = useNavigation();
        const handleRegistration = () => {
            navigation.navigate("Registration");

        }

         const handleProfile = () => {
           navigation.navigate("Profile");
         };
     const handleRegister = () => {
       // Perform registration or validation logic here
       console.log("Email:", email);
       console.log("Password:", password);
  
     };


     const loginUser = async () => {
       // Create a user object with the required data
       const user = {
         email,
         password
       };

       try {
         // Make a POST request to the login endpoint
         const response = await axios.post(
           "https://lonely-dove-gear.cyclic.app/api/v1/auth/login",
           user
         );
           await AsyncStorage.setItem("authorization", response.data.token);

          //  console.log(response.data);
         // Check if the response contains the user data and token
         if ( response.data.token) {
           // Navigate to the profile component
           navigation.navigate("Profile");
         
         } else {
           // Handle the case where the response is not as expected
           console.error("Invalid response from the server");
         }
       } catch (error) {
         // Handle errors (e.g., display an error message)
         console.error("Error logging in:", error);
       }
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
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome Back!</Text>
        <Image
          source={require("../assets/images/undraw_access_account_re_8spm 1.png")}
          style={styles.image}
        />
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
        </View>
        <View style={styles.forgot}>
          <Text
            style={{
              color: "#62D2C3",
              fontWeight: "bold",
              textAlign: "end"
            }}
          >
            Forgot Password ?
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={loginUser}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.links}>
        <Text>Don't have account ?</Text>
        <Text
          style={{
            color: "#62D2C3",
            fontWeight: "bold"
          }}
          onPress={handleRegistration}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#EEEEEE"
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
  image: {
    height: 150,
    width: 150,
    top: 20
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.2rem",
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
    gap: "1.2rem",
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
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10

  }
});
export default Login;
    