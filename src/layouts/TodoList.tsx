import { Button } from "@/shadcn/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import React, { useRef, useState } from "react";

interface TodoItem {
  id: number;
  text?: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const editingRefs = useRef<{ [key: number]: HTMLSpanElement | null }>(
    {}
  ).current;

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
      setTodos(todos.filter((_, i) => i !== index));
    }
  };

  const addTodo = () => {
    const newTodo = { id: Date.now(), text: "" };
    setTodos([...todos, newTodo]);
    setTimeout(() => {
      editingRefs[newTodo.id]?.focus();
    }, 0);
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

  return (
    <div className="p-4">
      <h2 className="text-4xl">Priorities List</h2>
      <div className="py-4">
        {addTodoButton}
        <div className="flex flex-col space-y-8 my-4">
          {todos.map((todo, index) => (
            <div key={todo.id} onClick={() => focusOnEdit(todo.id)}>
              <span
                contentEditable
                suppressContentEditableWarning
                className={`group px-3 py-2 rounded-md hover:bg-secondary focus-visible:outline-0 focus:bg-secondary hover:cursor-default`}
                ref={(el) => (editingRefs[todo.id] = el)}
                onKeyDown={(event) => handleKeyPress(event, index)}
                onBlur={(event) => {
                  const newText = (
                    event.target as HTMLElement
                  ).innerText.trim();
                  if (newText === "") {
                    setTodos(todos.filter((_, i) => i !== index));
                  } else {
                    const updatedTodos = todos.slice();
                    updatedTodos[index].text = newText;
                    setTodos(updatedTodos);
                  }
                }}
              >
                {todo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
