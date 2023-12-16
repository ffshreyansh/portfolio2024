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
    <div className='w-full lg:w-3/4 mx-auto px-4 lg:py-10 lg:px-0'>
      <motion.div className='w-full bg-yW rounded-2xl flex h-fit items-center '
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, }}
      >
        <div className='p-20'>
          <motion.span className='text-4xl font-bold'
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.2 }}
          >About Me</motion.span>
          <motion.p className='text-xl leading-8 mt-8'
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.4 }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam odio error quasi deleniti delectus totam odit, rerum possimus, eius officiis nesciunt quidem ullam suscipit amet. Cumque suscipit nihil exercitationem!</motion.p>
        </div>
        <img src="/imgg.png" className=' rounded-r-2xl ml-auto ' width={'45%'} alt="" />
      </motion.div>
      <h5 className='text-4xl font-bold w-1/2 mt-20 leading-snug'>Empowering Growth and Productivity through Notion Templates</h5>
      <div className='flex items-center w-1/2 gap-3 mt-14 mb-4'>
      <Link href={'https://linkedin.com/in/shreyansh-kr'}><img width={24} height={24} src="/linkedin.svg" alt="linkedin logo" /></Link>
            <Link href={'https://github.com/ffshreyansh'}><img width={24} height={24} src="/github.svg" alt="github logo" /></Link>
            <Link href={'https://instagram.com/ffshreyansh'}><img width={24} height={24} src="/insta.svg" alt="instagram logo" /></Link>
      </div>
      <div className='flex w-full  gap-2'>
          <p className='text-xl w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
          <p className='text-xl w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
      </div>
      <div className='flex w-full mt-8 gap-2'>
          <p className='text-xl w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>
          <p className='text-xl w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p>

      </div>
    </div>
  )
}

export default page