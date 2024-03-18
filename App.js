import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import Header from "./components/header";
import { ToDoForm } from "./components/toDoForm";
import AddToDo from "./components/addToDo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevToDos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevToDos];
      });
    } else {
      Alert.alert("Warning", "toDos Must be over 3 characters long!", [
        { text: "Understood!", onPress: () => console.log("Alert closed!") },
      ]);
    }
  };

  const pressHandler = (key) => {
    setTodos((prevToDos) => {
      return prevToDos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoForm item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
