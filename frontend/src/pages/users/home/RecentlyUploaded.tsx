import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import useQuery from '@/hooks/useQuery';
import React, { useState } from 'react'
import { MostViewed } from './types';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ComicType } from '@/constants/constants';

const RecentlyUploaded = () => {

    const [page, setPage] = useState<number>(1);

    const { data, isLoading } = useQuery(`users/last-uploaded?per_page=12&page=${page}`);

    const MemorizedData = React.useMemo(() => {
        console.log("memorized the most viewed data")
        return data;
    }, [data]) as MostViewed;

    return (
        <Card className='border-none'>
            <CardTitle className='flex justify-between'>
                <p className='text-2xl'>Recently Uploaded</p>
                <div className="relative">

                    <ToggleGroup variant="outline" type="single">
                        {
                            ComicType.map((type) => (
                                <ToggleGroupItem value={type.title} aria-label="Toggle bold">
                                    {
                                        type.title
                                    }
                                </ToggleGroupItem>
                            ))
                        }
                       
                       
                    </ToggleGroup>


                </div>
            </CardTitle>
            <CardDescription className='mt-4'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        !isLoading && MemorizedData?.mogous?.data.map((mogou) => (
                            <div key={mogou.id} className='pl-1 overflow-hidden cursor-pointer '>
                                <div className='flex h-full' >
                                    <div className="img w-32 md:w-40 ">
                                        <img src={mogou?.cover} alt="hero" className="w-full h-52 md:h-60 object-cover" />
                                    </div>
                                    <div className="bg-secondary h-full flex justify-center  items-start rounded-b-sm 
                                        w-2/3 flex-col ps-4
                                    ">
                                        <h1 className="text-xs md:text-sm font-semibold text-neon-primary truncate">{mogou?.mogou_type_name}</h1>
                                        <h1 className=" text-xs md:text-sm font-semibold text-white text-wrap">{mogou?.title}</h1>

                                        <div className="flex flex-col w-full gap-2 mt-4">
                                            {
                                                mogou?.sub_mogous?.map((sub_mogou) => (
                                                    <div key={sub_mogou.id} className='flex gap-2 items-center bg-primary py-2 w-[90%] px-2'>
                                                        <p className="text-xs md:text-sm text-white">{sub_mogou.title}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </CardDescription>

        </Card>
    )
}

export default RecentlyUploaded