import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

interface Props {
  insertTodo: string;
  setInsertTodo: (insertTodo: string) => void;
  insertItem: () => void;
}

const InsertTodoItemView = ({
  insertTodo,
  setInsertTodo,
  insertItem,
}: Props) => {
  return (
    <View style={styles.flexRowSpaceBetween}>
      <TextInput
        style={styles.todoInput}
        onChangeText={setInsertTodo}
        value={insertTodo}
        placeholder="💡할 일을 입력해주세요."
      />
      <TouchableOpacity onPress={insertItem} style={styles.customButton}>
        <Text style={styles.customButtonText}>입력</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  todoInput: {
    height: 50,
    margin: 10,
    width: "70%",
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
  flexRowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default InsertTodoItemView;
