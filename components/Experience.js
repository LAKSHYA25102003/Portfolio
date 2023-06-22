import React from 'react'

const Experience = () => {
    return (
        <div className='w-[80%] flex flex-col justify-center  mx-auto'>
            <h1 className='w-[100%] text-center py-[40px] text-[30px] font-medium'>Internship Experience</h1>
            <div className='flex flex-col gap-8 w-[100%]'>
                <div >
                    <div className='text-[23px] font-bold text-center md:text-start'>
                        Shakespeare AE
                    </div>
                    <div className=' grid grid-cols-3 mt-[10px]'>
                        <div>About Company</div>
                        <div>:</div>
                        <div className='text-gray-600'>Shakespeare is company based in San Francisco that converts businesses into a Metaverse Businesses. The parent company of Shakespeare, Electroshoe - based in San Francisco, has been featured in India times, New York times and also on TEDx.</div>
                    </div>
                    <div className=' grid grid-cols-3 mt-[10px]'>
                        <div>Role</div>
                        <div>:</div>
                        <div className='text-gray-600'>Full-Stack Developer</div>
                    </div>
                    <div className=' grid grid-cols-3 mt-[10px]'>
                        <div>Timeline</div>
                        <div>:</div>
                        <div className='text-gray-600'>May 2023 - June 2023</div>
                    </div>
                    <div className=' grid grid-cols-3 mt-[10px]'>
                        <div>Projects</div>
                        <div>:</div>
                        <div className='text-gray-600'>
                            <div className='font-bold'>Billing System for Admin,</div>
                            <div className='font-bold'>Inventory Management</div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 mt-[10px]'>
                        <div className='font-bold'>Billing System for Admin</div>
                        <div>:</div>
                        <div className='text-gray-600'>
                            Billing system is an admin board of restaurant,where he can track sells, billing , running orders and employees etc. All sells are shown using charts. Menu management, employee management, summary reports about all the items, these things can be checked and edited by admin using this dashboard.
                        </div>
                        <div>
                            Tech-stack
                        </div>
                        <div>:</div>
                        <div className='text-gray-600'>
                            MongoDB, Express, React, Node.js, Socket.io.
                        </div>
                    </div>
                    <br />
                    <div className=' grid grid-cols-3 mt-[10px]'>
                        <div className='font-bold'>Inventory Management</div>
                        <div>:</div>
                        <div className='text-gray-600'>
                            Inventory management is also created by me from scratch itself.
                            Admin can track the consumption of all the items, raw materials left in stock and waste management very easily. He can see summary of purchase orders, and stocks.
                        </div>
                        <div>
                            Tech-stack
                        </div>
                        <div>:</div>
                        <div className='text-gray-600'>
                            MongoDB, Express, React, Node.js, Socket.io.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
