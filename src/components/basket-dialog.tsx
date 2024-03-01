import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { Button } from "@/shadcn/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { IBasket } from "@/types/appTypes";

interface BasketDialogProps {
  basket: IBasket;
  open: boolean;
  onClose: () => void;
}

const BasketDialog: React.FC<BasketDialogProps> = ({
  basket,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="pb-4">
          <DialogTitle className="text-3xl">{basket.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {basket.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center border-2">
          <div className="text-muted-foreground py-32">
            Seems Empty. Drag a to-do here.
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div> */}
        </div>
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
