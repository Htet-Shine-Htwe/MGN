import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/users/Navbar";


type UserLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const UserLayout = ({ children, title = "" }: UserLayoutProps) => {

  const windowWidth = window.innerWidth;


  return (
    <div className="flex min-h-screen flex-col">

      <Navbar />
     

      <div className="w-full pt-10 md:pe-20 h-[140vh]">

        <div className="flex flex-col gap-8 w-full pt-2">

          <div className="flex w-full flex-col ">

            <div className="flex flex-col sm:gap-4 pb-8 md:pb-12 ">
              {children}

            </div>

          </div>
        </div>

      </div>

      <Toaster />
    </div>
  )
}

export default UserLayout