import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Todo } from "../types/todo";
interface Props {
  todo: Todo;
  updateItemState: (key: number) => void;
  removeItem: (key: number) => void;
}
const TodoItemView = ({ todo, updateItemState, removeItem }: Props) => {
  return (
    <View style={styles.flexRowSpaceBetween}>
      <BouncyCheckbox
        isChecked={todo.state}
        onPress={() => {
          updateItemState(todo.key);
        }}
      />
      <Text style={styles.todoItemText}>{todo.contents}</Text>
      <TouchableOpacity
        style={{ justifyContent: "center" }}
        onPress={() => removeItem(todo.key)}
      >
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default TodoItemView;
