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
    <nav className='flex items-center justify-between w-full fixed px-6 py-4 border-b bg-white z-50'>
      <span className='font-bold text-xl'>ShreyanshKr.</span>
      <div className='flex items-center justify-end lg:justify-between w-full md:w-1/4 cursor-pointer font-medium'>
        <span className='hidden md:inline'>Home</span>
        <span className='hidden md:inline' onClick={()=> scrollToElement('works')}>Works</span>
        <Link href={'/about'} className='hidden md:inline'>About</Link>
        <Link href="/contact" className='bg-black px-4 py-2 rounded-lg text-white text-sm font-medium '>Work with me</Link>
      </div>

    </nav>
  )
}

export default Nav