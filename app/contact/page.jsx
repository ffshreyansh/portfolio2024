'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet';
import Link from 'next/link';
const page = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='w-full lg:w-3/4 mx-auto mt-10 px-4 py-20 lg:px-0 lg:py-20'>
            <Helmet>
            <title>Contact me @ Shreyansh Kumar</title>
        <meta name="description" content="contact page of shreyansh kumar" />
            </Helmet>
            <h1 className='text-2xl lg:text-5xl font-bold text-center lg:text-left'>Contact me</h1>
            <p className='text-lg lg:text-2xl text-gray-500 text-center lg:text-left mt-5'>If you have any question, just drop me a message.</p>
            <div className='flex flex-col lg:flex-row gap-6 mt-10 items-start justify-between w-full'>
                <motion.div className='w-full lg:w-1/3 bg-yW rounded-xl h-80 flex flex-col items-start justify-between p-8'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, }}
                >
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl font-bold'>Chat on Whatsapp</span>
                        <p className='text-md text-gray-500'>If you have any question or need you help, just click the button, feel free to send a message anytime.</p>
                    </div>
                    <a className='bg-white w-full lg:w-1/2 h-12 rounded-lg font-medium flex items-center justify-center border' href='https://wa.me/qr/3M43YX6A5GIZD1'> Contact me </a>
                </motion.div>
                <motion.div className='w-full lg:w-1/3 bg-yW rounded-xl h-80 flex flex-col items-start justify-between p-8'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.2 }}
                >
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl font-bold'>Availabale for Freelance</span>
                        <p className='text-md text-gray-500'>Available on Upwork for projects, bug fixes, web design, optimization and custom web development. Let's work together!</p>
                    </div>
                    <a className='bg-white w-full lg:w-1/2 h-12 rounded-lg font-medium flex items-center justify-center border' href='mailto:hello@shreyanshkr.com?subject=Hello%20Shreyansh!'> Work with me </a>
                </motion.div>
                <motion.div className='w-full lg:w-1/3 bg-yW rounded-xl h-80 flex flex-col items-start justify-between p-8'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.4 }}
                >
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl font-bold'>Write me a mail</span>
                        <p className='text-md text-gray-500'>If you have any question or need you help, just click the button, feel free to send a message anytime.</p>
                    </div>
                    <a className='bg-white w-full lg:w-1/2 h-12 rounded-lg flex font-medium items-center justify-center border' href='mailto:hello@shreyanshkr.com?subject=Hello%20Shreyansh!'> Contact me </a>
                </motion.div>
            </div>
            <motion.div className='w-full bg-yW rounded-xl h-fit mt-20 py-14 px-10'
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.6 }}
            >
                <h6 className='text-center text-3xl font-bold'>Follow me and Join my journey</h6>
                <p className='text-center text-xl mt-2'>Join me as we navigate the dynamic world of creativity, design & Code </p>
                <div className='flex flex-col lg:flex-row w-3/4 mx-auto justify-between items-center mt-10'>
                    <Link href={'https://instagram.com/ffshreyansh'} className='w-fit px-4 h-14 gap-2 rounded-lg flex items-center justify-center border bg-white'>
                        <img width={32} src="/insta.svg" alt="instagram logo" />
                        Instagram
                    </Link>
                    <Link href={'https://linkedin.com/in/shreyansh-kr'} className='w-fit px-4 h-14 gap-2 rounded-lg flex items-center justify-center border bg-white'>
                        <img width={32} src="/linkedin.svg" alt="linkedin logo" />
                        LinkedIn
                    </Link>
                    <Link href={'https://x.com/shreyanshtwts'} className='w-fit px-4 h-14 gap-2 rounded-lg flex items-center justify-center border bg-white'>
                        <img width={32} src="/x.svg" alt="x logo" />
                        Twitter
                    </Link>
                    <Link href={'https://github.com/ffshreyansh'} className='w-fit px-4 h-14 gap-2 rounded-lg flex items-center justify-center border bg-white'>
                        <img width={32} src="/github.svg" alt="github logo" />
                        Github
                    </Link>
                    <Link href={'https://peerlist.io/shreyanshkr'} className='w-fit px-4 h-14 gap-2 rounded-lg flex items-center justify-center border bg-white'>
                        <img width={18} src="/peer.svg" alt="peerlist logo" />
                        PeerList
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default page