"use client";
import { motion } from "framer-motion";
import WorksHomePage from "@/components/WorksHomePage";
import Link from "next/link";
import Works from "@/components/Works";
import { useState, useEffect } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    // <div className="w-screen h-screen flex items-center justify-center">Loading...</div>

    <div className="px-2 lg:px-0 pb-20 ">
      <section className="flex flex-col justify-center h-screen w-full md:w-1/2 lg:w-1/2 mx-auto relative ">
        <motion.h1
          className="text-center text-4xl lg:text-8xl font-bold relative"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            duration: 0.5,
          }}
        >
          From Pixels <br /> to Programming
          <Link href={"/about"}>
            <motion.img
              src="/shre-face.png"
              className="rounded-full w-8 lg:w-16 absolute z-30 right-14 lg:right-12 xl:right-32 -top-2 lg:-top-4 animate-bounce"
            />
          </Link>
        </motion.h1>

        <motion.p
          className="text-gray-500 text-xl lg:text-2xl text-center mt-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            duration: 0.5,
            delay: 0.2,
          }}
        >
          I will transform your concepts into digital brilliance, blending{" "}
          <br className="hidden md:inline" /> creativity with flawless code
          execution.
        </motion.p>
        <motion.div
          className="flex items-center gap-4 mx-auto mt-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <Link
            href="https://www.upwork.com/workwith/shreyanshkumar"
            target="_blank"
            className="bg-black px-4 font-medium hover:bg-green-600 transition-all rounded-md text-white py-3"
          >
            Hire On Upwork
          </Link>
          <Link
            href="https://drive.google.com/file/d/1W1ItnWpwV2UTpTEXgsGvgW5PXC6GYjUN/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-3 font-medium border px-4 rounded-md  py-3"
          >
            Resume
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/pastel-glyph/64/document--v3.png"
              alt="document--v3"
            />
          </Link>
        </motion.div>
        <motion.img
          src="/dA.gif"
          className="w-8 mx-auto transformGif"
          alt="arrow gif"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            duration: 0.5,
            delay: 0.6,
          }}
        />
      </section>
      <WorksHomePage />
      <Works />

      <div className=" bg-yW w-full mx-auto lg:w-3/4 rounded-xl flex flex-col lg:flex-row gap-8 lg:gap-0 items-center p-4 lg:p-14 mt-20 lg:mt-0">
        <div className="flex flex-col items-start justify-between h-full gap-4 w-full pr-4">
          <span className=" bg-green-500 px-3 py-1 rounded-full text-white font-bold text-xs font-inter">
            HIRE
          </span>
          <h2 className="text-4xl font-bold text-black">Why me!?</h2>
          <p>
            Combining multiple skills to develop a fast reliable and beautiful
            web application
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5">
            <div className="bg-white border w-full lg:w-1/3 rounded-md h-fit p-6 flex flex-col items-start gap-4">
              <h5 className="font-bold ">Web Design & Layout</h5>
              <p>
                I begin by creating the web layout, selecting colors, and
                conducting thorough internet research to find the best
                references for outstanding web design.
              </p>
              {/* <Link href={"/contact"} className='border w-full lg:w-1/2 h-12 rounded-md flex items-center justify-center bg-black text-white hover:text-white'>Work with me</Link> */}
            </div>
            <div className="bg-white border w-full lg:w-1/3 rounded-md h-fit p-6 flex flex-col items-start gap-4">
              <h5 className="font-bold ">Web Optimization & SEO </h5>
              <p>
                Optimizing the website through processes like converting webp
                images, optimizing SEO with researched keywords, enhancing
                latest HTML tags and many more
              </p>
              {/* <Link href={"/contact"} className='border w-full lg:w-1/2 h-12 rounded-md flex items-center justify-center bg-black text-white hover:text-white'>Work with me</Link> */}
            </div>
            <div className="bg-white border w-full lg:w-1/3 rounded-md h-fit p-6 flex flex-col items-start gap-4">
              <h5 className="font-bold ">Web Scalability and Maintanence</h5>

              <p>
                Implementing strategies such as optimizing server resources,
                scalable architectures, and ensuring seamless ongoing support
                for sustained performance.
              </p>
              {/* <Link href={"/contact"} className='border w-full lg:w-1/2 h-12 rounded-md flex items-center justify-center bg-black text-white hover:text-white'>Work with me</Link> */}
            </div>
          </div>
          {/* <div className='flex items-center gap-4'>
            <Link href={"brinjal"} className='bg-black px-10 py-3 rounded-lg text-white text-sm font-medium'>View</Link>
            <Link href={"https://github.com/ffshreyansh"}>
              <img width="30" height="30" src="/github.svg" alt="github" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
