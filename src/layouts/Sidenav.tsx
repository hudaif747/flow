import { Button } from "@/shadcn/components/ui/button";
import { ListBulletIcon } from "@radix-ui/react-icons";

const Sidenav = () => {
  return (
    <div className="block">
      <div className="px-3 py-3">
        <h2 className="mb-4 px-4 text-5xl font-raleway_dots font-medium">
          flow.
        </h2>
        <div className="space-y-4 py-4">
          <Button variant="secondary" className="w-full justify-start">
            <ListBulletIcon className="mr-2 h-4 w-4" />
            My list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
