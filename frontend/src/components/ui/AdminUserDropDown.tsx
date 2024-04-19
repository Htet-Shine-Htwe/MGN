import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu"
import { memo } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../theme-provider"
import { IoIosArrowForward } from "react-icons/io";

const AdminUserDropDownRaw = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} align="end" className="pb-3  gap-4">
        <DropdownMenuItem>
          <Link
            to="/manage-restaurant"
            className="font-bold mb-2"
          >
            Profile
          </Link>

        </DropdownMenuItem>

        <DropdownMenuSub>

            <DropdownMenuSubTrigger className="flex items-center px-2 font-bold">
              <span className="text-sm flex  items-center justify-between w-full"> Theme
                
              </span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
            <DropdownMenuSubContent  className="DropdownMenuContent" sideOffset={10}>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuSubContent>
            </DropdownMenuPortal>

        </DropdownMenuSub>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const AdminUserDropDown = memo(AdminUserDropDownRaw);

export default AdminUserDropDown