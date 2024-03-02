import React from "react";
import { useTodoStore } from "../store/todoStore";
import { useBasketStore } from "../store/basketStore";
import Basket from "@/components/basket";
import TodoItem from "@/components/todoItem";
import { Button } from "@/shadcn/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITodoItem } from "@/types/appTypes";
import { ScrollArea } from "@/shadcn/components/ui/scroll-area";
import AddBasket from "@/components/add-basket";

const TodoList: React.FC = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useTodoStore((state) => ({
    todos: state.todos,
    addTodo: state.addTodo,
    removeTodo: state.removeTodo,
    updateTodo: state.updateTodo,
  }));
  const baskets = useBasketStore((state) => state.baskets);

  const handleAddNewTodo = () => {
    const newTodo: ITodoItem = {
      id: Date.now(),
      text: "",
      checked: false,
    };
    addTodo(newTodo);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 h-full flex">
        <div className="flex-1">
          <h2 className="text-4xl">My list</h2>
          <div className="py-4">
            <Button
              variant={"ghost"}
              className="text-muted-foreground"
              onClick={handleAddNewTodo}
            >
              <PlusIcon className="h-4 w-4" />
              Add a todo
            </Button>
            <div className="flex flex-col space-y-4 my-4">
              {todos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodo={() => removeTodo(todo.id)}
                  updateTodo={(id, fields) => updateTodo(id, fields)}
                  isNewTodo={index === todos.length - 1}
                  addNewTodo={handleAddNewTodo}
                  draggable={true}
                />
              ))}
            </div>
          </div>
        </div>
        <ScrollArea className="max-h-screen flex flex-col pr-4 pb-8">
          {baskets.map((basket, index) => (
            <Basket key={index} basket={basket} />
          ))}
          <AddBasket />
        </ScrollArea>
      </div>
    </DndProvider>
  );
};

export default TodoList;
