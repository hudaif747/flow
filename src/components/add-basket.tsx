import { Button } from "@/shadcn/components/ui/button";
import { Card } from "@/shadcn/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { useBasketStore } from "@/store/basketStore";
import { IBasket } from "@/types/appTypes";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";

interface AddBasketProps {}

const AddBasket: React.FC<AddBasketProps> = () => {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addBasketToStore = useBasketStore((state) => state.addBasket);

  const handleAddBasket = () => {
    if (!title || !description) {
      alert("Please provide both name and description");
      return;
    }

    const newBasket: IBasket = {
      title: title,
      badgeCount: 0,
      description: description,
      todos: [],
    };

    addBasketToStore(newBasket);
    toast(`New basket "${title}" has been created`, {
      position: "bottom-left",
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
    setOpen(false);
    setTitle("");
    setDescription("");
  };

  const cardButton = (
    <Card
      className={`w-64 h-24 hover:scale-105 group hover:border-muted-foreground hover:cursor-pointer mx-4 transition ease-in duration-150 flex justify-center items-center`}
    >
      <PlusCircledIcon className="w-12 h-12 text-muted group-hover:text-muted-foreground  transition ease-in duration-150" />
    </Card>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{cardButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl">Create Basket</DialogTitle>
          <DialogDescription className="text-md">
            Create a new basket here
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Title name for the basket"
              className="col-span-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Description for the basket"
              className="col-span-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleAddBasket}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBasket;
