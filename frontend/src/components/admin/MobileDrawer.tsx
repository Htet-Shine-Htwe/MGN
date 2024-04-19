import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { IoMenu } from "react-icons/io5";
import { navigateMenu } from "@/constants/constants";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

const MobileDrawer = () => {

  const [open,setOpen] = useState(false);

  const navigateMenuCollection = navigateMenu;

  const navigate = useNavigate();

  const handleNavigation = useCallback((to: string) => {
    navigate(to);
    setOpen(false);
  }, [navigate])

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" onClick={()=>setOpen(true)} >
          <IoMenu className="w-6 h-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm  pb-10 px-10">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="flex gap-12 flex-wrap">

            {
              navigateMenuCollection.map((menu, index) => (
                <div className="flex flex-col">
                  <Button key={index} asChild size="icon" onClick={() => handleNavigation(menu.to)} className="w-16  h-16">
                    <div>
                      <menu.Icon className="w-8 h-8" />
                    </div>
                  </Button>

                </div>
              ))
            }

          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer