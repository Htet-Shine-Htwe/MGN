import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"


const AdminUserDropDown = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center px-3 font-bold">
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <Link
          to="/manage-restaurant"
          className="font-bold "
        >
          Profile
        </Link>
      </DropdownMenuItem>
    
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default AdminUserDropDown