
import useQuery from "@/hooks/useQuery";
import HeadingSection from "./HeadingSection";
import { ChapterTable } from "./ChapterTable";
import { useParams } from "react-router-dom";
import Goback from "@/components/goback-btn";
import RelatedMogou from "./RelatedMogou";


const Show = () => {

    const { slug } = useParams<{ slug: string }>();


    const { data: mogous, isLoading, isFetching } = useQuery(`users/mogous/${slug}`);

    if(!isLoading && mogous?.mogou == null){
        return <div>
            notFound
        </div>
    }

    return (
        <div className=" px-6 md:px-24 flex flex-col">
            <div className="flex items-center gap-4 mb-10">
                <Goback to={'/'} />
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {mogous?.mogou?.title}
                </h1>
           
            </div>


            <div className="">
                <HeadingSection mogou={mogous?.mogou} isFavorite={mogous?.is_favorite} />
            </div>

            <div className="mt-12 grid md:grid-cols-5 gap-4 ">
                <div className="md:col-span-4 ">
                    <ChapterTable chapterCollection={mogous?.chapters} />
                </div>
                <div className="md:col-span-1 flex justify-start text-start">
                    <RelatedMogou />
                </div>
            </div>

        </div>
    )
}

export default Show