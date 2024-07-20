import { Button } from '@/components/ui/button'
import { RecentlyUploadedMogou } from './types'
import { MatureContentTag } from '@/components/ui/maturecontenttag'

type RecentlyUploadedCardProps = {
    mogou: RecentlyUploadedMogou
}

const RecentlyUploadedCard = ({ mogou }: RecentlyUploadedCardProps) => {
    return (
        <div className='pl-1 overflow-hidden cursor-pointer rounded-lg'>
            <div className='flex h-full' >
                <div className="img w-32 md:w-40 relative">
                    <img src={mogou?.cover} alt="hero" className="w-full h-52 md:h-60 object-cover" />
                    <MatureContentTag isMatureContent={mogou?.legal_age !} className='absolute top-1 right-0' />
                </div>
                <div className="bg-secondary/50 h-full flex justify-center  items-start rounded-b-sm 
            w-2/3 flex-col ps-4
        ">
                    <h1 className="text-xs md:text-sm font-semibold text-neon-primary truncate">{mogou?.mogou_type_name}</h1>
                    <h1 className=" text-xs md:text-sm font-semibold text-white text-wrap">{mogou?.title}</h1>

                    <div className="flex flex-col w-full gap-3 mt-4">   

                        {
                            mogou?.sub_mogous?.map((sub_mogou) => (
                                <Button key={sub_mogou.id} className='flex gap-2 justify-start items-center bg-primary  w-[90%] '>
                                    <p className="text-xs xl:text-sm text-white">{sub_mogou.title}</p>
                                </Button>
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}

export default RecentlyUploadedCard