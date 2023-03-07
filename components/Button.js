import React from 'react'

const Button = ({ link, text }) => {
    return (
        <button className='bg-[#ff4D41] w-[100px]   text-white py-[4px]  px-[4px] border-[2px] border-solid border-[#ff4D41] rounded-[5px]  flex justify-center mt-[20px]'>
            {text}
        </button>
    )
}

export default Button
