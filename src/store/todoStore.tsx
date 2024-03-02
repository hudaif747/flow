import { create } from "zustand";
import { ITodoItem } from "@/types/appTypes";

interface TodoState {
  todos: ITodoItem[];
  addTodo: (todo: ITodoItem) => void;
  removeTodo: (todoId: number) => void;
  updateTodo: (todoId: number, updatedFields: Partial<ITodoItem>) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  updateTodo: (todoId, updatedFields) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, ...updatedFields } : todo
      ),
    })),
}));
