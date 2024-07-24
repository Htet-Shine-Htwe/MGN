import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/users/Navbar";
import UserLayoutFooter from "./UserLayoutFooter";
import useQuery from "@/hooks/useQuery";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { setCategories } from "@/redux/slices/category-slice";


type UserLayoutProps = {
  children: React.ReactNode;
};

const UserLayout = ({ children}: UserLayoutProps) => {

  // const windowWidth = window.innerWidth;
  const { data } = useQuery('public/categories?limit=400');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategories(data?.categories.data));
  },[data])

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
        <div className="w-full bg-primary h-full md:px-24 py-4 flex justify-center items-center">
        All the comics on this website are only previews of the original comics, there may be many language errors, character names, and story lines. For the original version, please buy the comic if it's available in your city.
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default UserLayout