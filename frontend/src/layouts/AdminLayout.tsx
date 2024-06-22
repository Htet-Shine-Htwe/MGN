import Sidebar from "@/components/admin/Sidebar";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import Navbar from "@/components/admin/Navbar";

type AdminLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const AdminLayout = ({ children, title = "" }: AdminLayoutProps) => {

  const { toast } = useToast()
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowWidth = window.innerWidth;

  return (
    <div className="flex max-h-screen overflow-scroll  pb-10 relative">

      {
        windowWidth > 768 && (
          <div className="hidden md:w-[10%] min-w-[160px] md:flex justify-center py-6 sticky top-4 ">
          <Sidebar />
        </div>
        )
      }

      <div className="w-full md:w-[90%] pt-6 md:pe-20">

        <div className="flex flex-col gap-8 w-full pt-2">

          <Navbar title={title} />

          <div className="flex w-full flex-col ">

            <div className="flex flex-col sm:gap-4 sm:p5-4 pb-12 ">
              {children}

            </div>

          </div>
        </div>

      </div>

      <Toaster />
    </div>
  )
}

export default AdminLayout