
import useQuery from "@/hooks/useQuery";
import HeadingSection from "./HeadingSection";
import {ChapterTable} from "./ChapterTable";
import { useParams } from "react-router-dom";
import ShowSkeleton from "./ShowSkeleton";


const Show = () => {

    const { slug } = useParams<{ slug: string }>();
  

    const { data: mogous, isLoading, isFetching } = useQuery(`users/mogous/${slug}`);

    return (
        <div className=" px-6 md:px-24 flex flex-col">

            <div className="">
                <HeadingSection mogou={mogous?.mogou} isFavorite={mogous?.is_favorite} />
            </div>

            <div className="flex mt-12 ">
                <div className="w-4/5 pe-10">
                    <ChapterTable chapterCollection={mogous?.chapters}/>
                </div>
                <div className="w-1/5">

                </div>
            </div>

        </div>
    )
}

export default Show