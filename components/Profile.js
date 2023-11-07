import React, { useState, useRef,useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity,CheckBox,TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Task from "./Task";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile = () => {
  const navigation = useNavigation();
  const [isTaskModalVisible, setTaskModalVisible] = useState(false);
  const taskModalRef = useRef(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const toggleTaskModal = () => {
    setTaskModalVisible(!isTaskModalVisible);
  };

  const getAllTodos = async () => {

     const token = await AsyncStorage.getItem("authorization");
    //  console.log(token);
     //  console.log("Token:", token);

     const headers = {
       Authorization: `${token}` // Include the token in the "Authorization" header
     };
    try {
      const response = await axios.get(
        "https://lonely-dove-gear.cyclic.app//api/v1/todo/get-todos",
        {headers}
      );
      // console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

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
              fontWeight: "bold",
              fontSize: 25
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
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#000000"
              }}
            >
              Daily Tasks
            </Text>
            <TouchableOpacity onPress={toggleTaskModal}>
              <AntDesign name="pluscircleo" size={24} color="#62D2C3" />
            </TouchableOpacity>
          </View>

          {Array.isArray(todos) && todos.length > 0 ? (
            todos.map((todo) => (
              <View style={styles.task} key={todo._id}>
                <CheckBox
                  value={todo.completed}
                  style={{ width: 25, height: 25 }}
                />
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontSize: 20,
                    fontWeight: "semi-bold"
                  }}
                >
                  {todo.task}
                </Text>
              </View>
            ))
          ) : (
            <Text>DATA LOADING</Text>
          )}
        </View>

        {isTaskModalVisible && (
          <Task ref={taskModalRef} onClose={() => setTaskModalVisible(false)} />
        )}
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
    alignItems: "center"
  },
  profile: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
    borderRadius: 100
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
    shadowRadius: 8,
    width: "100%"
  },
  dailyTask: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  task: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    left: "5%",
    gap: 8,
    padding: 4
  }
});

export default Profile;
