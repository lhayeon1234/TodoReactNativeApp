import React from "react";
import { FlatList } from "react-native";
import { Todo } from "../types/todo";
import TodoItemView from "./TodoItemComponent";

interface Props {
  todoData: Array<Todo>;
  updateItemState: (key: number) => void;
  removeItem: (key: number) => void;
}
const TodoListComponent = ({
  todoData,
  updateItemState,
  removeItem,
}: Props) => {
  return (
    <FlatList
      data={todoData}
      renderItem={({ item }) => (
        <TodoItemView
          todo={item}
          updateItemState={updateItemState}
          removeItem={removeItem}
        />
      )}
    />
  );
};

export default TodoListComponent;
