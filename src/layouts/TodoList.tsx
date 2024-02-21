import { Button } from "@/shadcn/components/ui/button";
import { debounce } from "@/utility/utility";
import { PlusIcon } from "@radix-ui/react-icons";
import React, { useRef, useState } from "react";
import TodoItem from "@/components/todoItem";

export interface ITodoItem {
  id: number;
  text?: string;
  checked: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const editingRefs = useRef<{ [key: number]: HTMLSpanElement | null }>(
    {}
  ).current;

  const initialTodoItem: ITodoItem = {
    id: Date.now(),
    text: "",
    checked: false,
  };

  const handleBackspaceDebounced = debounce((index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  }, 200);

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    index: number
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newText = (event.target as HTMLElement).innerText.trim();
      if (newText === "") {
        setTodos(todos.filter((_, i) => i !== index));
      } else {
        const updatedTodos = todos.slice();
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
        (event.target as HTMLElement).blur();
        addTodo();
      }
    } else if (
      event.key === "Backspace" &&
      (event.target as HTMLElement).innerText.trim() === ""
    ) {
      handleBackspaceDebounced(index);
    }
  };

  const addTodo = () => {
    const newTodo = initialTodoItem;
    setTodos([...todos, newTodo]);
  };

  const focusOnEdit = (id: number) => {
    setTimeout(() => {
      editingRefs[id]?.focus();
    }, 0);
  };

  const addTodoButton = (
    <Button
      variant={"ghost"}
      className="text-muted-foreground"
      onClick={addTodo}
    >
      <div className="flex flex-col justify-center align-middle mr-1">
        <PlusIcon className="h-4 w-4" />
      </div>
      Add a todo
    </Button>
  );

  const handleCheckBoxChange = (checked: boolean | string, index: number) => {
    const updatedTodos = todos.slice();
    updatedTodos[index].checked = checked as boolean;
    setTodos(updatedTodos);
  };

  const onBlur = (event: React.FocusEvent<HTMLSpanElement>, index: number) => {
    const newText = (event.target as HTMLElement).innerText.trim();
    if (newText === "") {
      setTodos(todos.filter((_, i) => i !== index));
    } else {
      const updatedTodos = todos.slice();
      updatedTodos[index].text = newText;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl">My list</h2>
      <div className="py-4">
        {addTodoButton}
        <div className="flex flex-col space-y-4 my-4">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              handleCheckBoxChange={handleCheckBoxChange}
              handleKeyPress={handleKeyPress}
              onBlur={onBlur}
              focusOnEdit={focusOnEdit}
              isNewTodo={index === todos.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
