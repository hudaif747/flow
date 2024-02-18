import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcn/components/ui/sheet";

import React from "react";

interface MusicDrawerProps {
  children: React.ReactNode;
}

const MusicDrawer: React.FC<MusicDrawerProps> = ({ children }) => {
  // return (
  //   <Drawer key="music">
  //     <DrawerTrigger>Open</DrawerTrigger>
  //     <DrawerContent>
  //       {/* <DrawerHeader>
  //         <DrawerTitle>Are you absolutely sure?</DrawerTitle>
  //         <DrawerDescription>This action cannot be undone.</DrawerDescription>
  //       </DrawerHeader>
  //       <DrawerFooter>
  //         <Button>Submit</Button>
  //         <DrawerClose>
  //           <Button variant="outline">Cancel</Button>
  //         </DrawerClose>
  //       </DrawerFooter> */}
  //       <DrawerHeader>
  //         <DrawerClose>
  //           <Button variant="outline">Cancel</Button>
  //         </DrawerClose>
  //       </DrawerHeader>
  //       <div className="flex justify-center items-center p-8">{children}</div>
  //     </DrawerContent>
  //   </Drawer>
  // );
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
          <div className="flex justify-center items-center p-8">{children}</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MusicDrawer;
