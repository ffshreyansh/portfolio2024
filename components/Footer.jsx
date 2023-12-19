import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row items-start lg:items-center h-fit lg:h-72 border-t px-4 lg:px-0 py-10'>
      <div className='bg-white justify-between h-fit flex flex-col lg:flex-row w-full lg:w-3/4 px-4 lg:px-0 m-auto  gap-8 lg:gap-0'>
        <div className='flex flex-col items-start justify-between'>
          <img width={50} height={50} src="/imgg.png" className='rounded-full' alt="" />
          <h6 className='font-semibold'>Shreyansh Kumar</h6>
          <p className='text-md'>Freelance Web Developer & Designer</p>
          <div className='flex items-center w-1/2 gap-3 my-2'>
            <Link href={'https://linkedin.com/in/shreyansh-kr'}><img width={18} height={18} src="/linkedin.svg" alt="linkedin logo" /></Link>
            <Link href={'https://github.com/ffshreyansh'}><img width={18} height={18} src="/github.svg" alt="github logo" /></Link>
            <Link href={'https://instagram.com/ffshreyansh'}><img width={18} height={18} src="/insta.svg" alt="instagram logo" /></Link>
            {/* <Link href={'https://instagram.com/ffshreyansh'}><img width={18} height={18} src="/upwork.svg" alt="upwork logo" /></Link> */}
          </div>
          <p className='text-xs text-gray-400'>Copyright © Shreyansh</p>
          <p className='text-xs text-gray-400'>All rights reserved.</p>
          
        </div>
        <div className='flex flex-col items-start gap-2'>
          <span className='text-lg font-semibold  text-gray-500'>Contact</span>
          <a href="https://twitter.com/shreyanshtwts">Twitter</a>
          <a href="https://linkedin.com/in/shreyansh-kr">LinkedIn</a>
          <a href="https://github.com/ffshreyansh">Github</a>
          <a href="https://www.fiverr.com/shreyanshkr01">Fiverr</a>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <span className='text-lg font-semibold text-gray-500'>Freelancing</span>
          <Link href="/contact">Web Design</Link>
          <a href="">Front End Development</a>
          <a href="">Full Stack Development</a>
          <a href="">MERN Bug Solve</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer