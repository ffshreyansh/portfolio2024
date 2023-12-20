'use client'
import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Link from 'next/link';
const page = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='w-full lg:w-3/4 mx-auto px-4 py-20 lg:py-28 lg:px-0'>
       <Helmet>
        <title>About @ Shreyansh Kumar</title>
        <meta name="description" content="About page of shreyansh kumar" />
        {/* <meta name="keywords" content="keyword1, keyword2" /> */}
        {/* Add more metadata as needed */}
      </Helmet>
      <motion.div className='w-full bg-yW rounded-2xl flex flex-col-reverse lg:flex-row h-fit items-center '
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, }}
      >
        <div className='p-4 lg:pl-14'>
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
          >Hello there! I'm Shreyansh Kumar, a full-stack developer passionate about crafting visually stunning and resilient web applications. With expertise in tech stacks like Next.js, React.js, Tailwind CSS, MongoDB, and Node.js, I've collaborated with various freelance clients. My experience extends to working with prominent Indian startups such as <a href="https://uxhack.co">UxHack</a> and <a href="https://famyo.in">Xoog</a>, where I've contributed to the creation of innovative digital solutions</motion.p>
         <div className='flex items-center w-1/2 gap-3 mt-8 mb-4'>
      <Link href={'https://linkedin.com/in/shreyansh-kr'}><img width={24} height={24} src="/linkedin.svg" alt="linkedin logo" /></Link>
            <Link href={'https://github.com/ffshreyansh'}><img width={24} height={24} src="/github.svg" alt="github logo" /></Link>
            <Link href={'https://instagram.com/ffshreyansh'}><img width={24} height={24} src="/insta.svg" alt="instagram logo" /></Link>
      </div>
        </div>
        <img src="/pfp1.webp" className='rounded-r-2xl mx-auto lg:ml-auto w-full lg:w-1/2 shadow-sm' layout='responsive'  alt="profile picture" />
      </motion.div>
      <h5 className='text-2xl lg:text-4xl font-bold w-full lg:w-1/2 mt-20 leading-snug'>Elevating Digital Presence and Performance : Crafting Striking Websites, Robust Applications</h5>
     
      <div className='flex flex-col lg:flex-row w-full mt-8 gap-4 lg:gap-2'>
          <p className='text-xl w-full lg:w-1/2'> 
I embarked on my journey in the realm of digital design by creating graphics, web layouts, and promotional content for Sushilap. During this phase, I collaborated with various clients, including Sunny Day Carers (sunnydaycarers.com.au) and Aussie Youth Care, contributing to their design projects. My role at Sushilap extended to supporting clients with web design initiatives.</p>
          <p className='text-xl w-full lg:w-1/2'> Subsequently, I joined Xoog, where I undertook the responsibility of crafting promotional content and designing presentations for the apps featured on various app stores. Transitioning to UxHack marked a significant chapter in my career, where I meticulously redesigned webpages to achieve pixel-perfect precision and implemented new functionalities to enhance user experiences.</p>
      </div>
      <div className='flex flex-col lg:flex-row w-full mt-8 gap-4 lg:gap-2'>
          <p className='text-xl w-full lg:w-1/2'> In addition to my corporate engagements, I extended my expertise as a freelancer, collaborating with diverse clients to elevate the frontend user experience of their websites. My freelance projects involved not only refining web design aesthetics but also introducing new functionalities to enrich the overall user interaction.</p>
          {/* <p className='text-xl w-full lg:w-1/2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore illo, voluptas quasi possimus adipisci impedit eius totam minus nisi iste hic temporibus debitis nobis voluptates. Quo nemo voluptatum ullam.</p> */}
      </div>  
    </div>
  )
}

export default page