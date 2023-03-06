import React from 'react'
import mine from "../images/mine.jpg"
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <div className='flex bg-[url("/bg.jpg")] bg-cover bg-fixed h-screen opacity-[20]'>
            <div className='w-[100%] md:w-[50%] flex flex-col justify-center max-[804px]:items-center  md:pl-[80px]  text-white font-bold '>
                <h className=' text-[50px] md:text-[60px]'>I'm Lakshya</h>
                <div className='text-[24px]'>
                    <Typewriter options={
                        {
                            strings: ["Full-Stack Developer", "Competitive Programmer"],
                            changeDelay: 3,
                            changeDeleteSpeed: 2,
                            loop: true,
                            autoStart: true
                        }
                    }>
                    </Typewriter>
                </div>
                <div className='bg-[#ff4D41] w-[45px] h-[3px] mt-[20px]'></div>
                <div className='mt-[10px] max-[804px]:text-center w-[80%] md:w-[400px]'>I learn to know, to understand, and to engage with the world around me</div>
            </div>
            <div className='hidden md:w-[50%] md:flex justify-end pr-[60px] items-center '>
                <Image className='w-[300px] h-[300px] rounded-[50%]' src={mine} alt="My Image" />
            </div>
        </div>
    )
}

export default Hero
