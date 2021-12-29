import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function App() {
  type TodoItem = { key: number; contents: string };

  const [todoData, setTodoData] = useState<TodoItem[]>([]);
  const [insertTodo, setInsertTodo] = useState<string>("");

  const insertItem = () => {
    if (insertTodo === "") return;
    setTodoData(
      todoData.concat({
        key: todoData.length + 1,
        contents: insertTodo,
      })
    );
    setInsertTodo("");
  };
  const removeItem = (key: number): void => {
    setTodoData(
      todoData.filter((value: { key: number; contents: string }): boolean => {
        return value.key !== key;
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.title}>To Do List</Text>
        <View style={styles.flexRowSpaceBetween}>
          <TextInput
            style={styles.todoInput}
            onChangeText={setInsertTodo}
            value={insertTodo}
            placeholder="💡할 일을 입력해주세요."
          />
          <TouchableOpacity
            onPress={() => insertItem()}
            style={styles.customButton}
          >
            <Text style={styles.customButtonText}>입력</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todoData}
          renderItem={({ item }) => (
            <View style={styles.flexRowSpaceBetween}>
              <BouncyCheckbox
                onPress={(isChecked: boolean) => {
                  console.log(isChecked);
                }}
              />
              <Text style={styles.todoItemText}>{item.contents}</Text>
              <TouchableOpacity
                style={{ justifyContent: "center" }}
                onPress={(e: any) => removeItem(item.key)}
              >
                <Text>❌</Text>
              </TouchableOpacity>
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
    width: "70%",
  },
  flexRowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoItemText: {
    width: "70%",
    fontFamily: "fangsong",
    fontSize: 20,
    textAlign: "left",
    padding: 5,
  },
  removeTodoItem: {
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  customButton: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#a9a9a9",
    borderRadius: 5,
    height: 35,
  },
  customButtonText: {
    fontSize: 15,
    color: "#fffaf0",
  },
});
