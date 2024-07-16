import { Separator } from "@radix-ui/react-select"
import HeroCarousel from "./HeroCarousel"
import MostViewCarousel from "./MostViewCarousel"
import RecentlyUploaded from "./RecentlyUploaded"

import ShareSection from "./ShareSection"

const HomePage = () => {
  return (
    <main className="w-full flex flex-col gap-12 px-4 md:px-20">
      <div className="w-full flex justify-center ">
        <HeroCarousel />
      </div>

      <div className="w-full ">
        <ShareSection />
      </div>

      <div className="w-full">
        <MostViewCarousel />
      </div>

      <Separator className="w-full h-1 bg-primary" />

      <div className="w-full">
        <RecentlyUploaded />
      </div>

      <div className="w-full">
        <MostViewCarousel />
      </div>


    </main>
  )
}

export default HomePage