import { Badge } from "@/shadcn/components/ui/badge";
import { Button } from "@/shadcn/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDrop } from "react-dnd";
import BasketDialog from "./basket-dialog";
import { DnDType, IBasket } from "@/types/appTypes";

interface BasketProps {
  basket: IBasket;
}

const Basket: React.FC<BasketProps> = ({ basket }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: DnDType.ITEM,
    drop: (item, monitor) => {
      if (monitor) {
        console.log("isOver");
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleDialogOpen = (open: boolean) => setDialogOpen(open);

  return (
    <>
      <div ref={dropRef} onClick={() => handleDialogOpen(true)}>
        <Card
          className={`w-64 hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-300 ${isOver ? "border-slate-700 border-2" : ""}`}
        >
          <CardHeader>
            <CardTitle className="flex justify-between">
              {basket.title}
              <Badge>{basket.badgeCount}</Badge>
            </CardTitle>
            <CardDescription className="flex justify-between">
              {basket.description}
              {/* <div className="flex">
                <div className="flex justify-center items-center ml-2 hover:cursor-pointer">
                  <Pencil1Icon className="w-5 h-5" />
                </div>
              </div> */}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <BasketDialog
        basket={basket}
        open={isDialogOpen}
        onClose={() => handleDialogOpen(false)}
      />
    </>
  );
};

export default Basket;
