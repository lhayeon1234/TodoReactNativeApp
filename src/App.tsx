import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InsertTodoItemComponent from "./components/InsertTodoItemComponent";
import TodoListComponent from "./components/TodoListComponent";
import { Todo } from "./types/todo";
const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [insertTodo, setInsertTodo] = useState<string>("");

  const insertItem = () => {
    if (insertTodo === "") return;
    setTodoData(
      todoData.concat({
        key: todoData.length + 1,
        contents: insertTodo,
        state: false,
      })
    );
    setInsertTodo("");
  };
  const removeItem = (key: number): void => {
    setTodoData(
      todoData.filter(
        (value: { key: number; contents: string; state: boolean }): boolean => {
          return value.key !== key;
        }
      )
    );
  };
  const updateItemState = (key: number): void => {
    setTodoData(
      todoData.map(
        (item: { key: number; contents: string; state: boolean }): Todo => {
          return item.key === key ? { ...item, state: !item.state } : item;
        }
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.title}>To Do List</Text>
        <InsertTodoItemComponent
          insertTodo={insertTodo}
          setInsertTodo={setInsertTodo}
          insertItem={insertItem}
        />
        <TodoListComponent
          todoData={todoData.filter((todo) => todo.state === false)}
          updateItemState={updateItemState}
          removeItem={removeItem}
        />
        <Separator />
        <TodoListComponent
          todoData={todoData.filter((todo) => todo.state === true)}
          updateItemState={updateItemState}
          removeItem={removeItem}
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

  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
