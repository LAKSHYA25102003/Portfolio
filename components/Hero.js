import React from 'react'
// import mine from "../images/mine.jpg"
// import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Button from './Button'

const Hero = () => {
    return (
        <div className='flex bg-[url("https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/bg.jpg")] bg-cover bg-fixed h-screen opacity-[20]'>
            <div className='w-[100%] md:w-[50%] flex flex-col justify-center max-[768px]:items-center  md:pl-[80px]  text-white font-bold '>
                <h className=' text-[40px] md:text-[50px]'>I'm Lakshya</h>
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
                <div className='mt-[20px] max-[768px]:text-center w-[80%] md:w-[400px]'>I learn to know, to understand, and to engage with the world around me.
                </div>
                <Button href = "#about" text="Know More"/>
            </div>
            <div className='hidden md:w-[50%] md:flex justify-end pr-[60px] items-center '>
                <img className='w-[300px] h-[300px] rounded-[50%]' src={"https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/mine.jpg"} alt="My Image" />
            </div>
        </div>
    )
}

export default Hero
