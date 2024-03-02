import { Button } from "@/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/components/ui/dialog";
import { ScrollArea } from "@/shadcn/components/ui/scroll-area";
import { IBasket, ITodoItem } from "@/types/appTypes";
import { DialogClose } from "@radix-ui/react-dialog";
import TodoItem from "./todoItem";

interface BasketDialogProps {
  basket: IBasket;
  open: boolean;
  onClose: () => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedFields: Partial<ITodoItem>) => void;
  addNewTodo: () => void;
}

const BasketDialog: React.FC<BasketDialogProps> = ({
  basket,
  open,
  onClose,
  addNewTodo,
  deleteTodo,
  updateTodo,
}) => {
  const showTodos = (
    <ScrollArea className="h-96 rounded-md border">
      <div className="p-2">
        {basket.todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            isNewTodo={index === basket.todos.length - 1}
            addNewTodo={addNewTodo}
            draggable={false}
          />
        ))}
      </div>
    </ScrollArea>
  );

  const showEmpty = (
    <div className="h-96 flex flex-col justify-center items-center rounded-md border text-muted-foreground ">
      <div>Seems Empty. Drag a to-do here</div>
      <div>
        Or{" "}
        <Button variant={"link"} className="p-1" onClick={addNewTodo}>
          Add one now
        </Button>
      </div>
    </div>
  );
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="pb-4">
          <DialogTitle className="text-3xl">{basket.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {basket.description}
          </DialogDescription>
        </DialogHeader>
        {basket.todos.length ? showTodos : showEmpty}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BasketDialog;
