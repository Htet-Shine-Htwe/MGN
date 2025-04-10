import { Separator } from "@radix-ui/react-select"
import HeroCarousel from "./HeroCarousel"
import RecentlyUploaded from "./RecentlyUploaded"

import { useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useUserAppDispatch, useUserAppSelector } from "@/redux/hooks"
import {  selectIsSubscription, setBanners } from "@/redux/slices/user-global"
import AdsBanner from "./banners/adsBanner"
import ViewCarousel from "./MostViewCarousel"
import SEO from "@/pages/seo"
import useQuery from "@/hooks/useQuery"

const HomePage = () => {

  const { data: banners } = useQuery(`users/banners`);
  const dispatch = useUserAppDispatch();

  useEffect(() => {
    dispatch(setBanners(banners?.banners));
  }, [banners, dispatch]);

  const isSubscribed = useUserAppSelector(selectIsSubscription);
  console.log(isSubscribed);


  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, []);

  return (

    <main className="w-full flex flex-col gap-8 ">
      <SEO
        title="Home"
        description={"Read your favorite manga/manhwa online. Hundreds of high-quality free manga/manhwa for you, with a list being updated daily."}
        name="Home"
        type="Manga/Manwa" />

      <div className="w-full flex justify-center pt-8">
        <HeroCarousel />
      </div>

      <div className="w-full ">
        {
          (banners?.length > 0 && banners[0].active == true) && <AdsBanner banner={banners[0]} />
        }
      </div>

      <div className="w-full">
        <ViewCarousel title="Recommended For You" url="recommended" />
      </div>

      <Separator className="w-full h-1 bg-primary" />

      <div className="w-full">
        <RecentlyUploaded />
      </div>

      <Separator className="w-full h-1 bg-primary" />


      <div className="w-full">
        <ViewCarousel title="Most Viewed" url="most-viewed" />
      </div>

      <div className="w-full">
        {
          (banners?.length > 0 && banners[2].active == true) && <AdsBanner banner={banners[2]} />
        }
      </div>

      {/* go to top */}
      <div className="fixed bottom-4 right-4">
        <Button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="bg-primary text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </Button>
      </div>


    </main>
  )
}

export default HomePage