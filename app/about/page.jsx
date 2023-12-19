'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
const page = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='w-full lg:w-3/4 mx-auto px-4 py-20 lg:py-28 lg:px-0'>
      <motion.div className='w-full bg-yW rounded-2xl flex flex-col-reverse lg:flex-row h-fit items-center '
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, }}
      >
        <div className='p-4 lg:p-20'>
          <motion.span className='text-2xl lg:text-4xl font-bold'
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.2 }}
          >About Me</motion.span>
          <motion.p className='text-md lg:text-xl leading-snug lg:leading-8 mt-1 lg:mt-8'
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.4 }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam odio error quasi deleniti delectus totam odit, rerum possimus, eius officiis nesciunt quidem ullam suscipit amet. Cumque suscipit nihil exercitationem!</motion.p>
         <div className='flex items-center w-1/2 gap-3 mt-8 mb-4'>
      <Link href={'https://linkedin.com/in/shreyansh-kr'}><img width={24} height={24} src="/linkedin.svg" alt="linkedin logo" /></Link>
            <Link href={'https://github.com/ffshreyansh'}><img width={24} height={24} src="/github.svg" alt="github logo" /></Link>
            <Link href={'https://instagram.com/ffshreyansh'}><img width={24} height={24} src="/insta.svg" alt="instagram logo" /></Link>
      </div>
        </div>
        <img src="/pfp1.webp" className='rounded-r-2xl mx-auto lg:ml-auto w-full lg:w-1/2 shadow-sm'  alt="profile picture" />
      </motion.div>
      <h5 className='text-2xl lg:text-4xl font-bold w-full lg:w-1/2 mt-20 leading-snug'>Empowering Growth and Productivity through Notion Templates</h5>
     
      <div className='flex flex-col lg:flex-row w-full mt-8 gap-4 lg:gap-2'>
          <p className='text-xl w-full lg:w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
          <p className='text-xl w-full lg:w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
      </div>
      <div className='flex flex-col lg:flex-row w-full mt-8 gap-4 lg:gap-2'>
          <p className='text-xl w-full lg:w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
          <p className='text-xl w-full lg:w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
      </div>  
    </div>
  )
}

export default page