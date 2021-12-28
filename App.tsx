import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function App() {
  const [todoData, setTodoData] = useState([
    { key: 0, contents: "Devin" },
    { key: 1, contents: "Dan" },
    { key: 2, contents: "Dominic" },
    { key: 3, contents: "Jackson" },
    { key: 4, contents: "James" },
    { key: 5, contents: "Joel" },
    { key: 6, contents: "John" },
    { key: 7, contents: "Jillian" },
    { key: 8, contents: "Jimmy" },
  ]);

  const removeItem = (e: any, key: number) => {
    console.log(key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.title}>To Do List</Text>
        <TextInput
          style={styles.todoInput}
          placeholder="💡할 일을 입력해주세요."
        />
        <FlatList
          data={todoData}
          renderItem={({ item }) => (
            <View style={styles.flexRow2Colum}>
              <View style={styles.flexRow2Colum}>
                <BouncyCheckbox
                  onPress={(isChecked: boolean) => {
                    console.log(isChecked);
                  }}
                />
                <Text style={styles.todoItemText}>{item.contents}</Text>
              </View>
              <Button
                title="❌"
                onPress={(e: any) => removeItem(e, item.key)}
                color={"white"}
              />
            </View>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: "5%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  contents: {
    width: "80%",
  },
  title: {
    margin: 10,
    height: 40,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "fangsong",
    fontWeight: "bold",
  },
  todoInput: {
    height: 50,
    margin: 10,
  },
  flexRow2Colum: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoItemText: {
    fontFamily: "fangsong",
    fontSize: 20,
    textAlign: "left",
    padding: 5,
  },
  removeTodoItem: {
    alignSelf: "flex-end",
  },
});
