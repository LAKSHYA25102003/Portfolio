import React from 'react'
import { CgWebsite } from "react-icons/cg"
import { TbBrandCpp } from "react-icons/tb"

const WhatIDo = () => {
    return (
        <div className='w-[80%] flex flex-col justify-center  mx-auto'>
            <h1 className='w-[100%] text-center py-[40px] text-[30px] font-medium'>What I do</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-[100px] py-[40px] '>
                <div className=' min-h-[200px] flex flex-col bg-[#ff4D41] px-[20px] py-[20px] rounded-md w-[300px]'>
                    <div className='flex gap-4 items-center'>
                        <CgWebsite className='text-white text-[24px] font-medium' />
                        <h3 className='text-white text-[24px] font-medium text-center'>Web Development</h3>
                    </div>
                    <p className='text-white mt-[10px]'>I do web development. I am proficient in MERN stack. I have an experience of many projects which I have done using MERN stack.</p>
                </div>
                <div className='flex flex-col min-h-[200px] bg-[#ff4D41] px-[20px] py-[20px] rounded-md w-[300px]'>
                    <div className='flex gap-4 items-center'>
                        <TbBrandCpp className='text-white text-[24px] font-medium' />
                        <h3 className='text-white text-[24px] font-medium text-center'>Programming</h3>
                    </div>
                    <p className='text-white mt-[10px]'>I love programming complex problems. I use C++ programming language to do these problems. I have solved more than 500 problems over various platform.</p>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo
