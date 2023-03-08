
import React from 'react'
import colored from "../images/colored.jpg"
import Image from 'next/image'
import { AiOutlineGift } from "react-icons/ai"
import { HiOutlineBookOpen } from "react-icons/hi"
import { BsGlobe } from "react-icons/bs"
import { TiPointOfInterestOutline } from "react-icons/ti"
import { IoLocationOutline } from "react-icons/io5"
import { RiLinkedinBoxLine } from "react-icons/ri"
import { TbBrandGithub } from "react-icons/tb"
import { CgMail } from "react-icons/cg"

import Link from 'next/link'


const About = () => {
    return (
        <div id='about' className='w-[80%] flex flex-col justify-center  mx-auto'>
            <h1 className='w-[100%] text-center py-[40px] text-[30px] font-medium'>About Me</h1>
            <div className=' flex flex-col md:flex-row justify-center items-center'>
                <div className='w-[100%] md:w-[50%] py-[30px]'>
                    <img className='md:w-[70%] md:h-[90%] opacity-.01 px-[30px] ' src={"https://s3.ap-southeast-2.amazonaws.com/portfolio.lakshya/images/colored.jpg"} alt="My Image" />
                </div>
                <div className='w-[100%] md:w-[50%] py-[30px] '>
                    <div className=''>
                        <div className='grid grid-cols-3 gap-4'>


                            <div className='flex gap-3'>
                                <AiOutlineGift className="text-[#ff4D41] text-[24px] font-medium" /> <h3 className='font-medium'>Birthday</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'>25.10.2003</div>


                            <div className='flex gap-3'>
                                <HiOutlineBookOpen className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Current Study</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'>IIT Guwahati (B.Tech.) </div>


                            <div className='flex gap-3'>
                                <BsGlobe className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Website</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'><Link href={"https://www.dummy.com"}>www.dummy.com</Link></div>


                            <div className='flex gap-3'>
                                <RiLinkedinBoxLine className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>LinkedIn</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'><Link href={"https://www.linkedin.com/in/lakshya-254659204/"}>www.linkedin.com/in/lakshya-254659204</Link></div>


                            <div className='flex gap-3'>
                                <TbBrandGithub className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Github</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'><Link href={"https://github.com/LAKSHYA25102003"}>www.github.com/LAKSHYA25102003</Link></div>


                            <div className='flex gap-3'>
                                <CgMail className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Email</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'><Link href={"mailto:llakshya63@gmail.com"}>llakshya63@gmail.com</Link></div>



                            <div className='flex gap-3'>
                                <TiPointOfInterestOutline className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Interest</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'>Playing, Reading</div>


                            <div className='flex gap-3'>
                                <IoLocationOutline className="text-[#ff4D41] text-[24px]" /> <h3 className='font-medium'>Location</h3>
                            </div>
                            <div className='font-medium ml-[10px]'>:</div>
                            <div className='font-medium text-gray-600'>Ghaziabad, Noida</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
