import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { DnDType, ITodoItem } from "@/types/appTypes";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";

interface TodoItemProps {
  todo: ITodoItem;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedFields: Partial<ITodoItem>) => void;
  isNewTodo?: boolean;
  addNewTodo: () => void;
  draggable: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  updateTodo,
  isNewTodo,
  addNewTodo,
  draggable,
}) => {
  const editableRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isNewTodo && editableRef.current) {
      editableRef.current.focus();
    }
  }, [isNewTodo]);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DnDType.ITEM,
    item: todo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: "move",
    },
  }));

  const handleCheckChange = (checked: boolean) => {
    updateTodo(todo.id, { checked });
  };

  const handleBlur = () => {
    const newText = editableRef.current?.innerText.trim();
    if (newText === "") {
      deleteTodo(todo.id);
    } else {
      updateTodo(todo.id, { text: newText });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newText = editableRef.current?.innerText.trim();
      if (newText === "") {
        deleteTodo(todo.id);
      } else {
        updateTodo(todo.id, { text: newText });
        editableRef.current?.blur();
        addNewTodo();
      }
    } else if (
      event.key === "Backspace" &&
      editableRef.current?.innerText.trim() === ""
    ) {
      event.preventDefault();
      deleteTodo(todo.id);
    }
  };

  return (
    <div
      ref={dragRef}
      draggable={draggable}
      className={`flex w-fit group px-2 py-2 rounded-md hover:bg-secondary hover:cursor-default ${isDragging ? "opacity-50" : ""}`}
    >
      {draggable && (
        <div className="flex pr-1 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 justify-center items-center ml-1 cursor-move">
          <DragHandleDots2Icon />
        </div>
      )}
      <div className="flex justify-center items-center mr-2">
        <Checkbox checked={todo.checked} onCheckedChange={handleCheckChange} />
      </div>
      <span
        ref={editableRef}
        contentEditable
        suppressContentEditableWarning
        className={`focus-visible:outline-none focus:bg-secondary ${todo.checked ? "line-through text-muted-foreground" : ""}`}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
