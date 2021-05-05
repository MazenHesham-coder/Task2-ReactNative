import React, { useState, useMemo } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

let ID = 1;

export default function App() {
  const [value, setValue] = useState(value);
  const [todoList, setTodoList] = useState([
    { task: "", category: "All", compoleted: false, id: 0 },
  ]);
  const [filter, setFilter] = useState("All");

  const handleTextChange = (text) => {
    setValue(text);
  };

  const handleAddingToDo = () => {
    if (value !== "") {
      setTodoList([
        ...todoList,
        { task: value, category: "All", compoleted: false, id: ID },
      ]);
      ID = ID + 1;
    }
    setValue("");
  };

  const handleFilterAll = () => {
    setFilter("All");
  };

  const handleFilterDone = () => {
    setFilter("Done");
  };

  const handleFilterActive = () => {
    setFilter("Active");
  };

  const handleDone = (e) => {
    console.log(e.style);
  };

  const textPress = (id) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          compoleted: !todo.compoleted,
        };
      }
      return todo;
    });

    setTodoList(updatedTodos);
  };
  const displayTodos = useMemo(() => {
    if (filter == "All") {
      return todoList;
    } else if (filter == "Done") {
      return todoList.filter((task) => task.compoleted == true);
    } else if (filter == "Active") {
      return todoList.filter((task) => task.compoleted == false);
    }
  }, [todoList, filter]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>ToDo List</Text>

      <View style={styles.addView}>
        <TextInput
          style={styles.textInput}
          placeholder={"   Enter ToDo"}
          onChangeText={handleTextChange}
          value={value}
        />
        <TouchableOpacity style={styles.increase} onPress={handleAddingToDo}>
          <AntDesign name="pluscircle" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.categoryBotton}
          onPress={handleFilterAll}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFilterActive}
          style={styles.categoryBotton}
        >
          <Text> Active </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFilterDone}
          style={styles.categoryBotton}
        >
          <Text>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {displayTodos.map((task) => (
          <View style={styles.singleTask} key={task.id}>
            <Text
              onPress={() => textPress(task.id)}
              style={[
                styles.todoText,
                { textDecoration: task.compoleted ? "line-through" : "none" },
              ]}
            >
              {console.log("task.completed is now : " + task.compoleted)}

              {task.task}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#2e2e2e",
    padding: 8,
  },

  paragraph: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 40,
    fontFamily: "cursive",
    fontWeight: "bold",
    textAlign: "center",
    color: "#edb11a",
  },
  addView: {
    width: "80%",

    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 5,
    flexDirection: "row",
  },

  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 25,
    width: "65%",
  },

  increase: {
    margin: 5,
    width: 5,
    height: 5,
  },

  categories: {
    width: "80%",
    height: 50,
    margin: 5,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryBotton: {
    backgroundColor: "white",
    margin: 5,
    height: 30,
    borderRadius: 25,
    textAlign: "center",
    justifyContent: "center",
  },
  list: {
    backgroundColor: "gray",
    width: "80%",
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
  },
  singleTask: {
    width: "70%",
    backgroundColor: "white",
    textAlign: "center",
    margin: 10,
    borderRadius: 25,
  },
  todoText: {
    fontSize: 15,
    fontFamily: "cursive",
  },
});
