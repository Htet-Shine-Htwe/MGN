import BookMark from "@/components/ui/bookmark";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Rating } from "@/components/ui/rating";
import { FaCaretRight } from "react-icons/fa";
const Show = () => {
    return (
        <div className=" px-6 md:px-24 flex flex-col">

            <div className="">
                <Card className="px-0 border-none">
                    <CardContent className="grid md:grid-cols-5 mx-0 px-0 gap-10 xl:gap-4">
                        <div className="flex justify-center md:justify-normal md:col-span-2 xl:col-span-1">
                            <img src="https://static.mangafire.to/i/2/2b/8b76b4aeaa15c06e3e05fa1248668915.jpg"
                                className="h-full xl:h-80 object-cover" />
                        </div>
                        <div className="text-center md:text-start col-span-full md:col-span-3 xl:col-span-3 flex flex-col gap-3 md:gap-4">
                            <span className="text-xl md:text-3xl text-neon-primary font-semibold tracking-widest">Releasing</span>
                            <Label className="text-lg md:text-4xl font-semibold">Title</Label>
                            <div className="flex gap-4 text-3xl justify-center md:justify-start">
                                <Button
                                    className="bg-neon-primary text-white  py-6 text-lg px-8 flex items-center">
                                    Start Reading <FaCaretRight className="text-2xl" />
                                </Button>

                                <BookMark isBookMarked={false} className=" py-6 text-lg"/>
                            </div>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <span className="text-muted">Manga</span>
                                <span className="text-muted">22123</span>
                            </div>
                            <div className="flex">
                                <span className="text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque perferendis alias at dicta quam ex possimus? Enim perferendis mollitia odio quia suscipit reiciendis sapiente nulla voluptatem quos, velit accusantium reprehenderit vero assumenda.
                                </span>
                            </div>
                        </div>
                        <div className="col-span-full xl:col-span-1 flex xl:flex-col gap-4 xl:justify-center justify-between ">
                            <div className="flex flex-col gap-1">
                                <p className="text-md">
                                    <span className="text-muted">Author :</span> <span className="text-white text-sm">Author Name</span>
                                </p>
                                <p className="text-md">
                                <span className="text-muted">Published At :</span> <span className="text-white text-sm"> Jul 02, 2020 to ?</span>
                                </p>
                                <p className="text-md">
                                    <span className="text-muted">Genres :</span> <span className="text-white text-sm"> Action, Sci-Fi, Shounen, Super Power, Adventure, Fantasy, Horror, Military</span>
                                </p>
                            </div>
                            <Card  className="bg-secondary mt-4 ">
                                    <CardContent className="flex gap-4 items-center  md:h-20 px-6 py-0">
                                        <div className="w-1/3 text-xl whitespace-nowrap">
                                            4 / 5
                                        </div>
                                        <div className="w-2/3 flex justify-start">
                                            <Rating rating={4} size={20} variant="default" />
                                        </div>
                                     
                                    </CardContent>
                                </Card>
                        </div>
                    </CardContent>

                </Card>
            </div>

        </div>
    )
}

export default Show