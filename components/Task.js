import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Task = forwardRef((props, ref) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const[checked,setChecked] = useState(false);

  const handleSend = () => {
    // Do something with the task and its completion status.
    console.log("Task:", task);
    setTask(""); // Clear the task input
    props.onClose(); // Close the modal by calling the onClose callback
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      setTask(""); // Clear any existing task
    }
  }))

 const addTask = async () => {
   const token = await AsyncStorage.getItem("authorization");
  //  console.log("Token:", token);

   const headers = {
     Authorization: `${token}` // Include the token in the "Authorization" header
   };

   // Create a todo object with the task and completed properties
   const todo = {
     task,
     completed
   };

   try {
     // Make a POST request to the API endpoint to add the todo
     const response = await axios.post(
       "https://lonely-dove-gear.cyclic.app/api/v1/todo/add-todo",
       todo,
       { headers } // Include the headers with the token
     );

     console.log("Response data:", response.data);

     // Check if the todo was successfully added
     if (response.data) {
       // You can perform additional actions or update the UI as needed
       console.log("Todo added successfully");
       props.onClose();
     } else {
       // Handle the case where the response is not as expected
       console.error("Invalid response from the server");
     }
   } catch (error) {
     // Handle errors (e.g., display an error message)
     console.error("Error adding todo:", error);
   }
 };




  const handleCheckboxChange = (checked) => {
    setCompleted(checked);
  };


  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <View style={styles.task}>
          <CheckBox
            checked={completed}
            value={completed}
            onChange={(isChecked) => handleCheckboxChange(isChecked)}
            onValueChange={() => setCompleted(!completed)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter a task..."
            onChangeText={(text) => setTask(text)}
            value={task}
          />
        </View>

        <View style={styles.send}>
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.buttonText}>send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2,
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  taskContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "90%",
    gap: "2.5rem",
    backgroundColor: "#EEEEEE",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8,
    borderRadius: 10
  },
  task: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4
  },
  send: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 18
  },
  input: {
    width: "20rem",
    height: "3.3rem",
    borderRadius: "2rem",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    padding: 10,
    outlineStyle: "none"
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
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "poppins"
  }
});

export default Task;
