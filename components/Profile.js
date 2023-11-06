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
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ProfileHolder}>
        <Image
          source={require("../assets/images/Ellipse 1.png")}
          style={styles.image1}
        />
        <Image
          source={require("../assets/images/Ellipse 2.png")}
          style={styles.image2}
        />

        <View style={styles.Profile}>
          <Image
            source={require("../assets/images/Ellipse 479.png")}
            style={styles.image}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            Welcome Mary
          </Text>
        </View>
      </View>

      <View style={styles.group}>
        <Image
          source={require("../assets/images/Group 162.png")}
          style={{
            height: 150,
            width: 150
          }}
        />
      </View>

      <View style={styles.taskHolder}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30
          }}
        >
          Task List
        </Text>

        <View style={styles.tasks}>
          <View style={styles.dailyTask}>
            <Text>Daily Tasks</Text>
            <AntDesign name="pluscircleo" size={24} color="#62D2C3" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#EEEEEE",
    gap: "1rem"
  },
  ProfileHolder: {
    height: 300,
    width: "100%",
    backgroundColor: "#62D2C3",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
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
    width: 100,
    height: 100,
    borderRadius: "100%"
  },
  group: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  taskHolder: {
    paddingLeft: 10,
    paddingRight: 10
  },
  tasks: {
    backgroundColor: "#FFf",
    height: 350,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8
  },
  dailyTask: {
    display: "flex",
    flexDirection: "row",
  justifyContent:"space-between",
 padding:10

  }
});
export default Profile;
