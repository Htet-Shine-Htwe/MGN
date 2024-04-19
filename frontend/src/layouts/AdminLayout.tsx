import Sidebar from "@/components/admin/Sidebar";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

type AdminLayoutProps = {
    children: React.ReactNode;
    };

const AdminLayout = ({children}:AdminLayoutProps) => {

  const { toast } = useToast()

  useEffect(()=>{
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
      variant: "success",
    });
  },[])

  return (
    <div className="flex min-h-screen">
        <div className="w-[10%] min-w-[160px] flex justify-center py-6">
            <Sidebar />
        </div>
        <div className="w-[90%] pt-6 pe-20">
            {children}
        </div>

        <Toaster  />
    </div>
  )
}

export default AdminLayout