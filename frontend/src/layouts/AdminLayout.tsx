import Sidebar from "@/components/admin/Sidebar";
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/admin/Navbar";

type AdminLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const AdminLayout = ({ children, title = "" }: AdminLayoutProps) => {

  const windowWidth = window.innerWidth;

  return (
    <div className="flex h-screen overflow-scroll relative">

      {
        windowWidth > 768 && (
          <div className="hidden md:w-[10%] min-w-[160px] md:flex justify-center sticky items-center ">
          <Sidebar />
        </div>
        )
      }

      <div className="w-full md:w-[90%] pt-10 md:pe-20 pb-10 ">

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