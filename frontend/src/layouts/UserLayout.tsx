import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/users/Navbar";
import UserLayoutFooter from "./UserLayoutFooter";


type UserLayoutProps = {
  children: React.ReactNode;
};

const UserLayout = ({ children}: UserLayoutProps) => {

  // const windowWidth = window.innerWidth;


  return (
    <div className="flex min-h-screen flex-col">

      <Navbar />
     

      <div className="w-full pt-10 min-h-screen">

        <div className="flex flex-col gap-8 w-full pt-2">

          <div className="flex w-full flex-col ">

            <div className="flex flex-col sm:gap-4 pb-8 md:pb-12 ">
              {children}

            </div>

          </div>
        </div>

      </div>

      <footer>
        <UserLayoutFooter />
      </footer>

      <Toaster />
    </div>
  )
}

export default UserLayout