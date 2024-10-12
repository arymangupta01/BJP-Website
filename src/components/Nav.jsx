import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
        <div className='flex justify-between w-full fixed z-50 '>
            <div>
                <img className='w-full h-12 m-3' src="https://www.bjp.org/files/logo_1_0.png?rnd=197463428" alt="BHARTIYA JANATA PARTY" />
            </div>

            <div className='flex'>
                <ul className='flex p-5 text-white font-semibold gap-6'>
                    <li>Hello BJP</li>
                    <li>State Websites</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className=' flex  gap-3'>
                <button className='text-white bg-[#F5821F] rounded-sm h-8 mt-4 p-2 text-sm'>JOIN BJP</button>
               
                <button className='text-white bg-[#F5821F] rounded-sm h-8 mt-4 p-2 mx-4 text-sm' >MAKE A DONATION</button>
            </div>

        </div>
    </>
  )
}

export default Nav