import { Badge } from "@/shadcn/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { DnDType, IBasket, ITodoItem } from "@/types/appTypes";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useBasketStore } from "../store/baskets";
import BasketDialog from "./basket-dialog";
import { useTodoStore } from "@/store/todos";

const Basket: React.FC<{ basket: IBasket }> = ({ basket }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const {
    addTodoToBasket,
    removeTodoFromBasket,
    addNewTodoToBasket,
    updateTodo,
  } = useBasketStore((state) => ({
    addTodoToBasket: state.addGlobalTodoToBasket,
    removeTodoFromBasket: state.removeTodoFromBasket,
    addNewTodoToBasket: state.addNewTodoToBasket,
    updateTodo: state.updateTodoInBasket,
  }));

  const { removeGlobalToDo } = useTodoStore((state) => ({
    removeGlobalToDo: state.removeTodo,
  }));

  const addNewTodo = () => {
    const newTodo: ITodoItem = { id: Date.now(), text: "", checked: false };
    addNewTodoToBasket(basket.title, newTodo);
  };

  const removeTodo = (todoId: number) => {
    removeTodoFromBasket(basket.title, todoId);
  };

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: DnDType.ITEM,
    drop: (item: ITodoItem, monitor) => {
      if (monitor) {
        addTodoToBasket(basket.title, item.id);
        removeGlobalToDo(item.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <>
      <div ref={dropRef} onClick={() => setDialogOpen(true)}>
        <Card
          className={`w-64 hover:scale-105 hover:cursor-pointer ${isOver ? "border-2 border-slate-700" : ""}`}
        >
          <CardHeader>
            <CardTitle className="flex justify-between">
              {basket.title}
              <Badge>{basket.badgeCount}</Badge>
            </CardTitle>
            <CardDescription>{basket.description}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <BasketDialog
        basket={basket}
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        addNewTodo={addNewTodo}
        deleteTodo={removeTodo}
        updateTodo={(id, fields) => updateTodo(basket.title, id, fields)}
      />
    </>
  );
};

export default Basket;
