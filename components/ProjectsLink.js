import React from 'react'
import Link from 'next/link'

const ProjectsLink = () => {
    return (
        <div className='w-[80%] flex flex-col justify-center  mx-auto py-[30px]'>
            <h1 className='w-[100%] text-center py-[40px] text-[30px] font-medium'>Projects</h1>
            <div className='grid grid-cols-3 md:w-[70%] m-auto gap-4'>
                <div className='  '>
                    <div className='font-bold text-[18px] md:text-[20px]'>ConnectUs</div>
                    <div className='text-[14px]'>A social media application where we can chat with friends, and post the messages etc.</div>
                </div>
                <div className='font-medium text-[18px] ml-[15px] md:text-[20px] '>:</div>
                <div className='font-medium text-[#ff4D41] hover:font-bold text-[18px] md:text-[20px]  underline'><Link target={"_blank"} href={"https://connectus.vercel.app/login"}>Visit ConnectUs</Link></div>
            </div>
        </div>
    )
}

export default ProjectsLink
