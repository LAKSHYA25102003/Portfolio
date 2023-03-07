
import React from 'react'
import colored from "../images/colored.jpg"
import Image from 'next/image'
import { AiOutlineGift } from "react-icons/ai"
import { HiOutlineBookOpen } from "react-icons/hi"
import { BsGlobe } from "react-icons/bs"
import { TiPointOfInterestOutline } from "react-icons/ti"
import { IoLocationOutline } from "react-icons/io5"

import Link from 'next/link'


const About = () => {
    return (
        <div className='w-[80%] flex flex-col justify-center  mx-auto'>
            <h1 className='w-[100%] text-center py-[40px] text-[30px] font-medium'>About Me</h1>
            <div className='flex'>
                <div className='w-[50%] py-[30px]'>
                    <Image className='w-[70%] h-[90%] opacity-.01 px-[30px] ' src={colored} alt="My Image" />
                </div>
                <div className='w-[50%] py-[30px] flex flex-col'>
                    <div className='flex gap-4 justify-center'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4'>
                                <AiOutlineGift className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Birthday</h3>
                            </div>
                            <div className='flex gap-4'>
                                <HiOutlineBookOpen className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Study</h3>
                            </div>
                            <div className='flex gap-4'>
                                <BsGlobe className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Website</h3>
                            </div>
                            <div className='flex gap-4'>
                                <TiPointOfInterestOutline className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Interest</h3>
                            </div>
                            <div className='flex gap-4'>
                                <IoLocationOutline className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Location</h3>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 pl-[10px]'>
                            <div className='font-medium'>:</div>
                            <div className='font-medium'>:</div>
                            <div className='font-medium'>:</div>
                            <div className='font-medium'>:</div>
                            <div className='font-medium'>:</div>
                        </div>
                        <div className='flex flex-col gap-6 text-gray-600 pl-[10px]'>
                            <div className='font-medium'>25.10.2003</div>
                            <div className='font-medium'>IIT Guwahati (B Tech.) </div>
                            <div className='font-medium'><Link href={"https://www.dummy.com"}>www.dummy.com</Link></div>
                            <div className='font-medium'>Playing, Reading</div>
                            <div className='font-medium'>Ghaziabad, Noida</div>
                        </div>
                    </div>
                    <div className='text-gray-600 pl-[10px] py-[60px]'>
                        Hii, My name is Lakshya. I am a fullstack developer. I love competitive programming too. I am very passionate and dedicated for my work.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
