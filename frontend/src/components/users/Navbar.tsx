import { CircleUser, Menu, Package2 } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Logo from "@/assets/imgs/logo-icon.png";
import { Link } from "react-router-dom"
import { useTheme } from "../theme-provider"
import { DropdownMenuSub } from "@radix-ui/react-dropdown-menu"
import useSafeContent from "@/hooks/useSafeContent"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import { DesktopNavigation } from "./DesktopNavigation";

const Navbar = () => {

    const { setTheme } = useTheme();

    const { safeContent, toggleSafeContent } = useSafeContent();


    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-20 z-[999]">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    to="#"
                    className=""
                >
                    <img src={Logo} alt="logo" className="w-60 hover:motion-safe:animate-spin-slow cursor-pointer" />
                </Link>

                <DesktopNavigation />
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            to="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            to="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Orders
                        </Link>
                        <Link
                            to="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Products
                        </Link>
                        <Link
                            to="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Customers
                        </Link>
                        <Link to="#" className="hover:text-foreground">
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">



                <div className="ml-auto sm:flex-initial">
                    <div className="flex items-center gap-3">
                        <Label className="text-muted-foreground">Safe Content</Label>
                        <Switch
                            checked={safeContent}
                            onCheckedChange={toggleSafeContent}
                        />
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    {
                        true ? (<DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>

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


                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                        ) : (<DropdownMenuContent align="end">
                            <DropdownMenuItem>Login</DropdownMenuItem>

                        </DropdownMenuContent>)

                    }
                </DropdownMenu>


            </div>
        </header>
    )
}

export default Navbar