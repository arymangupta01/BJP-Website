import React from 'react'

const Nav = () => {
  return (
    <>
        <div className='flex justify-between w-full  '>
            <div>
                <img className='w-full h-12 m-3' src="https://www.bjp.org/files/logo_1_0.png?rnd=197463428" alt="BHARTIYA JANATA PARTY" />
            </div>

            <div className='flex'>
                <ul className='flex p-5 text-white font-semibold gap-6'>
                    <li>My BJP</li>
                    <li>State Websites</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className=' flex  gap-3'>
            <button className='text-white bg-[#F5821F] rounded-sm h-8 mt-4 p-2 text-sm'>
              JOIN BJP
            </button>
               
                <button className='text-white bg-[#F5821F] rounded-sm h-8 mt-4 p-2 mx-4 text-sm' >MAKE A DONATION</button>
            </div>

        </div>
    </>
  )
}

export default Nav