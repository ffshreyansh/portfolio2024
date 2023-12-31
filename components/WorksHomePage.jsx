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
          <div className='flex flex-row w-full lg:w-1/2 items-center gap-4'>
            <Link href={"/work/brinjal"}  className='bg-black w-3/4 lg:w-3/4 h-12 flex items-center justify-center rounded-lg text-white text-sm font-medium'>View</Link>
            <Link href={"https://github.com/ffshreyansh"} className='w-1/4 lg:w-1/4 h-12 rounded-lg font-medium flex items-center justify-center  '>
              <img width="30" height="30" src="/github.svg" alt="github" className='' />
              {/* <span className='inline lg:hidden'>Github</span> */}
            </Link>
          </div>
        </div>
        <img className='w-full lg:w-1/2' src="/withoutBg/admin.webp" width={100} alt="Admin dashboard image" />

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
          <span className=' bg-orange-400 px-3 py-1 rounded-full text-white font-bold text-xs'>In Progress</span>
          <h2 className='text-2xl lg:text-4xl font-bold text-black'>Octagon - Agency</h2>
          <p className='text-md lg:text-xl font-normal'>This portfolio serves as an agency's visual narrative, presenting a curated collection of their past projects, detailed work processes, and impactful frontend layouts.</p>
         
          <div className='flex flex-row w-full lg:w-1/2 items-center gap-4'>
            <Link href={"https://octagon-tau.vercel.app/"}  className='bg-black w-3/4 lg:w-3/4 h-12 flex items-center justify-center rounded-lg text-white text-sm font-medium'>View</Link>
            <Link href={"https://github.com/ffshreyansh"} className='w-1/4 lg:w-1/4 h-12 rounded-lg font-medium flex items-center justify-center  '>
              <img width="30" height="30" src="/github.svg" alt="github" className='' />
              {/* <span className='inline lg:hidden'>Github</span> */}
            </Link>
          </div>
        </div>
        <img className='w-full lg:w-1/2' src="/withoutBg/octagon.webp" width={100} alt="sign up page image" />
      </motion.div>
    </div>
  );
};

export default WorksHomePage;
