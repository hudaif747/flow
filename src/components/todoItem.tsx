import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { motion, useDragControls } from "framer-motion";
import { ITodoItem } from "@/layouts/TodoList";

interface TodoItemProps {
  todo: ITodoItem;
  index: number;
  handleCheckBoxChange: (checked: boolean | string, index: number) => void;
  handleKeyPress: (
    event: React.KeyboardEvent<HTMLSpanElement>,
    index: number
  ) => void;
  onBlur: (event: React.FocusEvent<HTMLSpanElement>, index: number) => void;
  focusOnEdit: (id: number) => void;
  isNewTodo?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  handleCheckBoxChange,
  handleKeyPress,
  onBlur,
  focusOnEdit,
  isNewTodo,
}) => {
  const editableRef = useRef<HTMLSpanElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();

  useEffect(() => {
    if (isNewTodo && editableRef.current) {
      editableRef.current.focus();
    }
  }, [isNewTodo]);

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragControls.start(event);
  };
  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      key={todo.id}
      onClick={() => focusOnEdit(todo.id)}
      className="flex w-fit group px-2 py-2 rounded-md hover:bg-secondary hover:cursor-default"
      drag={isDragging}
      onPointerUp={endDrag}
      dragControls={dragControls}
    >
      <div
        className={`flex opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 justify-center items-center mr-1 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={startDrag}
        onPointerUp={endDrag}
      >
        <DragHandleDots2Icon />
      </div>
      <div className="flex justify-center items-center mr-2">
        <Checkbox
          onCheckedChange={(checked) => handleCheckBoxChange(checked, index)}
          checked={todo.checked}
        />
      </div>
      <span
        ref={editableRef}
        contentEditable
        suppressContentEditableWarning
        className={`focus-visible:outline-0 focus:bg-secondary ${todo.checked ? "line-through text-muted-foreground" : ""}`}
        onKeyDown={(event) => handleKeyPress(event, index)}
        onBlur={(event) => onBlur(event, index)}
      >
        {todo.text}
      </span>
    </motion.div>
  );
};

export default TodoItem;
