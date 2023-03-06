import React from 'react'
import Link from 'next/link'
import { HiDownload } from "react-icons/hi"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    return (
        <div className='bg-white w-[100%] fixed top-0 z-10'>
            <div className='container py-4 mx-auto flex justify-between items-center'>
                <div className='text-[24px]  font-bold w-[30%] flex justify-center item-center'>
                    Lakshya
                </div>
                <div className='hidden md:flex gap-6 w-[40%]  justify-center item-center'>
                    <Link className='hover:text-[#ff4D41]' href={"/"}>Home</Link>
                    <Link className='hover:text-[#ff4D41]' href={"/about"}>Blog</Link>
                    <Link className='hover:text-[#ff4D41]' href={"/portfolio"}>Portfolio</Link>
                    <Link className='hover:text-[#ff4D41]' href={"/about"}>About</Link>
                    <Link className='hover:text-[#ff4D41]' href={"/contact"}>Contact</Link>
                </div>
                <div className='w-[30%] hidden md:flex justify-center item-center'>
                    <button className='bg-white  hover:bg-[#ff4D41] hover:text-white  px-[4px] border-[2px] border-solid border-[#ff4D41] rounded-[5px] text-[#ff4D41] flex justify-center items-center gap-2'>
                        Download CV <HiDownload />
                    </button>
                </div>
                <div className='cursor-pointer menu-bar md:hidden text-[24px] pr-[20px]'>
                    <FiMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
