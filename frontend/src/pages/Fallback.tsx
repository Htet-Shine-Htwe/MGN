import fallback from '@/assets/fallback.png';


const Fallback = () => {

  return (
    <div className='w-full h-screen flex justify-center items-center '>

        <div className="flex flex-col gap-2 items-center">
            <h3 className='text-4xl text-bold'>Something Went Wrong</h3>
            <img src={fallback} alt="fallback" className="w-1/2 mx-auto" />
        </div>
    </div>
  )
}

export default Fallback