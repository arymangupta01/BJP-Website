import React from 'react'

const UsersPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-700 relative flex'>
        <div className='h-full w-[500px] border-2 border-white overflow-y-scroll'>
            <div className='flex gap-4 px-2 py-3'>
                <img className='rounded-full w-[120px] h-[120px]' src="https://yt3.googleusercontent.com/rOxmp7jqiqRmG4SXcUcyiGpldwzWE7k49DrEkjUH_QjPEHNM6prk5bXl4upySUfAZL_18qSJZg=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <h1 className='flex font-semibold text-xl items-center justify-center'>Amit Shah</h1>
            </div>
            <div className='px-3 py-5'>
                <ul className=''>
                    <li className='py-2'>Bhartiya Janata Party</li>
                    <li className='py-2'>Lorem ipsum dolor sit</li>
                    <li className='py-2'>Lorem ipsum dolor sit</li>
                    <li className='py-2'>Lorem ipsum dolor sit</li>
                </ul>
            </div>
        </div>
        <div className='border-white flex border-2 w-full h-full'>
            <div>hiiiiii</div>
            <div>kkkkkkk</div>
        </div>
    </div>
  )
}

export default UsersPage