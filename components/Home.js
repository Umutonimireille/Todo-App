import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function Home() {
const navigation = useNavigation();

const handleRegistration = () => {
  // Navigate to the "Market" screen
  navigation.navigate("Registration");
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

      <View style={styles.all}>
        <View style={styles.back}>
          <Image
            source={require("../assets/images/undraw_mobile_ux_re_59hr 1.png")}
            style={styles.backg}
          />
        </View>

        <View style={styles.stats}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Get things done with TODO
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "light", marginTop: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            gravida purus id eu condimentum est diam quam. Condimentum blandit
            diam.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  back: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:10
   
  },
  backg: {
    height: 200,
    width: 200
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"80%"
   
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#62D2C3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    
  },
  all:{
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    gap:"4.5rem",
    height: "100vh"
  }
});

export default Home;
