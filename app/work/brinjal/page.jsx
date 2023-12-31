'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const page = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className='content px-2 lg:px-0 py-10 lg:py-16 w-full lg:w-3/4 mx-auto'>
      <motion.div
        className=' bg-yW w-full mx-auto rounded-xl flex flex-col lg:flex-row gap-8 lg:gap-0 items-start p-4 lg:p-14'
        initial="hidden"
         animate="visible"
         variants={fadeInVariants}
         transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5 }}
        >
        <div className='flex flex-col items-start justify-between h-full lg:h-80 gap-4 pr-4'>
        <span className=' bg-red-600 px-3 py-1 rounded-full text-white font-bold text-xs'>NEW</span>
          <h2 className='text-4xl font-bold text-black'>Brinjal Ecommerce </h2>
          <p className='text-md lg:text-xl font-normal'>Experience the future of e-commerce with our Next.js and Tailwind CSS-powered web app. Seamlessly manage product stocks, track website analytics with integrated Google Analytics, and empower users with a sleek interface for easy browsing, shopping, and cart management. Elevate your online business effortlessly.</p>
          <div className='flex flex-col w-full lg: lg:flex-row items-center gap-4'>
            <Link href={"brinjal"} className='bg-black w-full lg:w-1/4 h-10 flex items-center justify-center rounded-lg text-white text-sm font-medium'>Visit</Link>
            <Link href={"https://github.com/ffshreyansh"} className='hidden lg:inline'>
              <img width="30" height="30" src="/github.svg" alt="github" />
            </Link> 
          </div>
        </div>
        <img className='w-full lg:w h-full lg:h-80' src="/withoutBg/brinjal.webp" alt="" />
      </motion.div>
      <div className='flex flex-col lg:flex-row items-start justify-start py-16 px-4 lg:px-0 h-fit gap-10'>
        <div className='flex flex-col justify-between gap-4 mb-4 lg:mb-0'>
          
          <span className='font-semibold text-3xl'>Requirements</span>
          <p className='leading-snug text-md lg:text-lg text-gray-500'>Clear requirements are the blueprint for a successful web app. They guide the choice of a robust tech stack, define essential features like admin control and e-commerce functionality, and ensure scalability and security measures from the start..</p>
          <ul className=" list-inside ">
            <li className="text-md bg-yW p-2 rounded-lg mb-1 break-words">Tailwind CSS, Node.js, and MongoDB for a robust foundation</li>
            <li className="text-md bg-yW p-2 rounded-lg mb-1">Features for stock management, product handling, and Google Analytics integration.</li>
            <li className="text-md bg-yW p-2 rounded-lg mb-1">Design a user-friendly experience for browsing, cart management, and seamless checkouts.</li>
            <li className='text-md bg-yW p-2 rounded-lg mb-1'>Plan for growth with scalable architecture and prioritize security measures, including user authentication and data encryption</li>
          </ul>
        </div>
        <img src="/withoutBg/admin.webp"  className='w-full lg:w-1/2 h-full lg:h-fit' alt="" />
      </div>
      <div className='flex flex-col-reverse lg:flex-row items-start justify-start py-2 px-4 lg:px-0 lg:py-16 h-fit gap-10'>
      <img src="/withoutBg/brinjal2.webp"  className='w-full lg:w-1/2' alt="" />
        <div className='flex flex-col justify-between gap-4 mb-4 lg:mb-0'>
          <span className='font-semibold text-3xl'>Process</span>
          <p className='leading-snug text-md lg:text-lg text-gray-500'>After the blueprint we move on to the implementation steps as below:</p>
          <ul className=" list-inside ">
            <li className="text-md bg-yW p-2 rounded-lg mb-1 break-words">Define project goals, scope, and target audience. Outline admin dashboard and e-commerce features</li>
            <li className="text-md bg-yW p-2 rounded-lg mb-1">Set up the project, implement Next.js, Tailwind CSS, Node.js, and MongoDB. Create admin features, and design the e-commerce interface</li>
            <li className="text-md bg-yW p-2 rounded-lg mb-1">Conduct rigorous testing, including unit and integration tests, and address identified issues.</li>
            <li className='text-md bg-yW p-2 rounded-lg mb-1'>Deploy to production, monitor performance, and regularly update for new features and security patches.</li>
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default page