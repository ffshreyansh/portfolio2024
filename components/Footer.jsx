import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row items-start lg:items-center h-96 lg:h-72 border-t py-10'>
    <div className='bg-white justify-between h-fit flex flex-col lg:flex-row w-full px-6 lg:px-24 m-auto  gap-4 lg:gap-0'>
        <div className='flex flex-col items-start justify-between'>
            <img width={50} height={50} src="/imgg.png" className='rounded-full' alt="" />
            <h6 className='font-semibold'>Shreyansh Kumar</h6>
            <p className='text-md'>Freelance Web Developer & Designer</p>
            <p className='text-xs text-gray-400'>Copyright © Shreyansh</p>
            <p className='text-xs text-gray-400'>All rights reserved.</p>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <span className='text-lg font-semibold  text-gray-500'>Contact</span>
            <a href="">Twitter</a>
            <a href="">LinkedIn</a>
            <a href="">Github</a>
            <a href="">PeerList</a>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <span className='text-lg font-semibold text-gray-500'>Available For</span>
            <a href="">Web Design</a>
            <a href="">Front End Development</a>
            <a href="">Full Stack Development</a>
            <a href="">MERN Bug Solve</a>
        </div>
    </div>
    </footer>
  )
}

export default Footer