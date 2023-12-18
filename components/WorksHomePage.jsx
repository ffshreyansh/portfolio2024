'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WorksHomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-30% 0px', // Adjust as needed
  });

  return (
    <div
      className='py-10 w-full lg:w-3/4 mx-auto flex flex-col items-center gap-8'
      ref={ref}
    >
      <motion.div
        className=' bg-yW w-full rounded-xl flex flex-col gap-8 lg:gap-0 lg:flex-row items-center p-4 lg:p-14 hover:shadow-lg hover:-mt-2 transition duration-300'
        variants={fadeInUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
      >
        <div className='flex flex-col items-start justify-between h-full gap-4 pr-4'>
          <span className=' bg-orange-400 px-3 py-1 rounded-full text-white font-bold text-xs'>In Progress</span>
          <h2 className='text-2xl lg:text-4xl font-bold text-black'>Admin Dashboard</h2>
          <p className='text-md lg:text-xl font-normal'>A robust admin dashboard, effortlessly manage product stocks, add or remove items, and gain valuable insights into website analytics through integrated Google Analytics.</p>
          <div className='flex flex-col lg:flex-row w-full lg:w-1/2 items-center gap-4'>
            <Link href={"/work/brinjal"} className='bg-black w-full lg:w-1/2 h-12 flex items-center justify-center rounded-lg text-white text-sm font-medium'>View</Link>
            <Link href={"https://github.com/ffshreyansh"} className='w-full lg:w-1/2 h-12 rounded-lg font-medium flex items-center justify-center border lg:border-0  bg-white lg:bg-transparent'>
              <img width="30" height="30" src="/github.svg" alt="github" className='hidden lg:inline' />
              <span className='inline lg:hidden'>Github</span>
            </Link>
          </div>
        </div>
        <img className='w-full lg:w-1/2' src="/withoutBg/admin.webp" alt="" />

      </motion.div>
      <motion.div
        className=' bg-yW w-full rounded-xl flex flex-col lg:flex-row gap-8 lg:gap-0 items-center p-4 lg:p-14 hover:shadow-xl transition duration-100'
        variants={fadeInUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
        transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.2 }}
      >
        <div className='flex flex-col items-start justify-between h-full gap-4 pr-4'>
          <span className=' bg-red-600 px-3 py-1 rounded-full text-white font-bold text-xs'>New</span>
          <h2 className='text-2xl lg:text-4xl font-bold text-black'>Loch - Newsletter</h2>
          <p className='text-md lg:text-xl font-normal'>A frontend layout to handle newsletter data, It authenticated user's email and save the email in database. The modal part is interactive for user to showcase feature highlights of the company</p>
         
          <div className='flex flex-col lg:flex-row w-full lg:w-1/2 items-center gap-4'>
            <Link href={"https://loch-eight.vercel.app/"}  className='bg-black w-full lg:w-1/2 h-12 flex items-center justify-center rounded-lg text-white text-sm font-medium'>View</Link>
            <Link href={"https://github.com/ffshreyansh"} className='w-full lg:w-1/2 h-12 rounded-lg font-medium flex items-center justify-center border lg:border-0  bg-white lg:bg-transparent'>
              <img width="30" height="30" src="/github.svg" alt="github" className='hidden lg:inline' />
              <span className='inline lg:hidden'>Github</span>
            </Link>
          </div>
        </div>
        <img className='w-full lg:w-1/2' src="/withoutBg/singUp.webp" alt="" />
      </motion.div>
    </div>
  );
};

export default WorksHomePage;
