'use client'
import Link from 'next/link'
import React, { useState } from 'react'


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  
  return (
    <nav className='w-full fixed px-2 py-4 border-b bg-white z-50'>
      <div className='flex items-center justify-between px-4 w-full md:w-2/3 mx-auto'>
      <Link href={'/'} className='font-bold text-xl outline-none'>ShreyanshKr.</Link>
      <div className='flex items-center justify-end lg:justify-between w-fit md:w-1/3 lg:w-1/3 gap-2 lg:gap-0 cursor-pointer font-medium outline-none '>
        <Link href={'/'} className='hidden md:inline'>Home</Link>
        
        <span className='hidden md:inline' onClick={()=> scrollToElement('works')}>Works</span>
        <Link href={'/about'} className='hidden md:inline'>About</Link>
        <Link href="/contact" className='bg-black px-4 py-3 rounded-lg text-white text-sm font-medium outline-none focus:bg-none'>Work with me</Link>
      </div>
      </div>
    </nav>
  )
}

export default Nav
