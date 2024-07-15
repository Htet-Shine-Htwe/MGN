import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const HeroCarousel = () => {
  return (
   <Carousel className="min-w-full ">
      <CarouselContent className="-ml-1 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 overflow-hidden  ">
            <div className="p-1 ">
              <Card className="h-60 md:h-72 border-x-neon-primary border-x-2 z-80">
                <CardContent className="flex aspect-square ">
                    <div className="side-a w-2/3">
                        <div className="flex flex-col py-10 gap-10">

                            <div className="">
                                <h1 className="text-2xl font-semibold">Hero Carousel</h1>
                                <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </span>
                                <span className="text-xs gene">
                                    Action, Adventure, Comedy
                                </span>
                            </div>
                            


                        </div>
                    </div>
                    <div className="side-b w-1/3 ">
                        {/* 45* rotate img */}
                        <div className="w-full overflow-hidden h-56">
                        <img src="https://static.mangafire.to/i/b/be/be308a7826761b8ec99a2b8c8b339581.jpg" alt="hero" className="h-[400px] w-[900px] z-40 transform rotate-6"/>

                        </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}

export default HeroCarousel