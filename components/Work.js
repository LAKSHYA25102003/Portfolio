import React from 'react'
import Image from 'next/image'

const Work = () => {
    const loadImage1 = () => {
        return "https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/ConnectUs_home.jpg";
    }
    const loadImage2 = () => {
        return "https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/connectUs_chat.jpg";
    }
    const loadImage3 = () => {
        return "https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/teams_chat.jpg";
    }
    return (
        <div className='w-[80%] flex flex-col justify-center  mx-auto'>
            <h1 className='w-[100%] text-center py-[40px] text-[30px] font-medium'>My Work</h1>
            <div className='w-[100%] flex flex-col py-[30px] gap-6 md:gap-[50px]'>
                <div className='flex flex-col w-[100%]'>
                    <Image className=' rounded-md shadow-lg sm:w-[100%] sm:h-auto' width={500} height={200} loader={loadImage1} src={"https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/ConnectUs_home.jpg"}></Image>
                </div>
                <div className=' flex flex-col w-[100%]'>
                    <Image className=' rounded-md shadow-lg sm:w-[100%] sm:h-auto' width={500} height={200} loader={loadImage2} src={"https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/connectUs_chat.jpg"}></Image>
                </div>
                <div className='flex flex-col w-[100%]'>
                    <Image className=' rounded-md shadow-lg sm:w-[100%] sm:h-auto' width={500} height={200} loader={loadImage3} src={"https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/teams_chat.jpg"}></Image>
                </div>
            </div>
        </div>
    )
}

export default Work
