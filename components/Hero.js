import React from 'react'
// import mine from "../images/mine.jpg"
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Button from './Button'

const Hero = () => {
    const loadImage=()=>{
        return `https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/mine.jpg`
    }
    return (
        <div className='flex bg-[url("https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/bg.jpg")] bg-cover bg-fixed h-screen opacity-[20]'>
            <div className='w-[100%] md:w-[50%] flex flex-col justify-center max-[768px]:items-center  md:pl-[80px]  text-white font-bold '>
                <h className=' text-[40px] md:text-[50px]'>I&apos;m Lakshya</h>
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
                <Image loader={loadImage} src="https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/mine.jpg" className='z-100 rounded-[50%]' width={300} height={300}   alt="My Image" />
            </div>
        </div>
    )
}

export default Hero
