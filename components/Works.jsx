import Link from 'next/link'
import React from 'react'
const Works = () => {
  return (
    <div className='py-32 lg:px-0 w-full lg:w-3/4 mx-auto' id='works'>
      <div className='text-center px-2 lg:px-14'>
        <h3 className='text-2xl lg:text-4xl font-bold'>Modern Sleek Frontend & Robust Scalable Backend</h3>
        <p className='text-sm lg:text-xl font-normal mt-4 text-gray-600'>I use <a href='https://react.dev/'><u>React</u></a> & <a href='https://tailwindcss.com/'><u>TailwindCSS</u></a> to beautify the frontend where as <a href='https://nodejs.org/en'><u>NodeJs</u></a> & <a href='https://mongodb.com'><u>MongoDb</u></a> combined with <a href='https://nextjs.org'><u>NextJs</u></a> framework to develop scalable web applications.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className=' rounded-t-xl' src="/withBg/admin.png" alt="admin" />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Admin Dashboard</h6>
              <p className=' leading-snug'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis!</p>
              <Link href={"f"} className='bg-black text-white px-4 py-2 text-sm rounded-md'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className=' rounded-t-xl' src="/withBg/admin.png" alt="admin" />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Admin Dashboard</h6>
              <p className=' leading-snug'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis!</p>
              <Link href={"f"} className='bg-black text-white px-4 py-2 text-sm rounded-md'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className=' rounded-t-xl' src="/withBg/admin.png" alt="admin" />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Admin Dashboard</h6>
              <p className=' leading-snug'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis!</p>
              <Link href={"f"} className='bg-black text-white px-4 py-2 text-sm rounded-md'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className=' rounded-t-xl' src="/withBg/admin.png" alt="admin" />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Admin Dashboard</h6>
              <p className=' leading-snug'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis!</p>
              <Link href={"f"} className='bg-black text-white px-4 py-2 text-sm rounded-md'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className=' rounded-t-xl' src="/withBg/admin.png" alt="admin" />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Admin Dashboard</h6>
              <p className=' leading-snug'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis!</p>
              <Link href={"f"} className='bg-black text-white px-4 py-2 text-sm rounded-md'>Explore</Link>
          </div>
        </div>
       
        
      </div>

    </div>
  )
}

export default Works