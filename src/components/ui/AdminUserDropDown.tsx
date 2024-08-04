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
import useLogout from "@/hooks/useLogout"
import AlertBox from "./AlertBox"
// import { useAppSelector } from "@/redux/hooks"
// import { adminAuthSelector } from "@/redux/slices/admin-auth-slice"

const AdminUserDropDownRaw = () => {
  const { setTheme } = useTheme();
  const logout = useLogout();

  // const admin = useAppSelector(adminAuthSelector);

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
            className="font-bold "
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
            <DropdownMenuSubContent className="DropdownMenuContent" sideOffset={10}>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>

        </DropdownMenuSub>


        <DropdownMenuItem className="font-bold w-full"   asChild>
          <AlertBox alertTitle="Logout" alertDescription="Are you sure you want to logout?" alertActionConfirmText="Logout" alertConfirmAction={logout}
            btnText={<>Logout</>} />
        </DropdownMenuItem>




      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const AdminUserDropDown = memo(AdminUserDropDownRaw);

export default AdminUserDropDown