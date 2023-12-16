'use client'
import React from 'react'
import { motion } from 'framer-motion'
const page = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='w-full lg:w-3/4 mx-auto mt-10 px-4 py-20 lg:px-0 lg:py-20'>
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
                        <span className='text-xl font-bold'>Write me a mail</span>
                        <p className='text-md text-gray-500'>If you have any question or need you help, just click the button, feel free to send a message anytime.</p>
                    </div>
                    <a className='bg-white rounded-lg px-4 py-3 border' href='mailto:hello@shreyanshkr.com?subject=Hello%20Julien!'> Contact me </a>
                </motion.div>
                <motion.div className='w-full lg:w-1/3 bg-yW rounded-xl h-80 flex flex-col items-start justify-between p-8'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.2 }}
                >
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl font-bold'>Availbale for Freelance</span>
                        <p className='text-md text-gray-500'>Hire me on upwork to build your projects, solve bugs, web design, custom web development etc.</p>
                    </div>
                    <a className='bg-white rounded-lg px-4 py-3 border' href='mailto:hello@shreyanshkr.com?subject=Hello%20Julien!'> Hire me </a>
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
                    <a className='bg-white rounded-lg px-4 py-3 border' href='mailto:hello@shreyanshkr.com?subject=Hello%20Julien!'> Contact me </a>
                </motion.div>
            </div>
            <motion.div className='w-full bg-yW rounded-xl h-96 mt-20 py-14 px-10'
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.6 }}
            >
                <h6 className='text-center text-3xl font-bold'>Follow me and Join my journey</h6>
            </motion.div>
        </div>
    )
}

export default page