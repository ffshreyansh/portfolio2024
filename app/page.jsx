'use client'
import { motion } from 'framer-motion';
import WorksHomePage from "@/components/WorksHomePage";
import Link from "next/link";
import Works from '@/components/Works';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const Home = () => {
  return (
    <div className='px-2 lg:px-0'>
      <section className="flex flex-col justify-center h-screen w-full lg:w-1/2 mx-auto">
        <motion.h1
          className="text-center text-4xl lg:text-8xl font-bold"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, }}
        >
          From Pixels <br /> to Programming
        </motion.h1>
        <motion.p
          className="text-gray-500 text-xl lg:text-2xl text-center mt-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.2 }}
        >
          I will transform your concepts into digital brilliance, blending <br className='hidden md:inline' /> creativity with flawless code execution.
        </motion.p>
        <motion.div className="flex items-center gap-4 mx-auto mt-6"
         initial="hidden"
         animate="visible"
         variants={fadeInVariants}
         transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.5, delay: 0.4 }}
        >
          <Link href="https://upwork.com" className="bg-black px-6 font-medium hover:bg-green-600 transition-all rounded-md text-white py-3">Hire On Upwork</Link>
          <Link href="https://upwork.com" className="flex items-center gap-3 font-medium border px-6 rounded-md  py-3">Resume
            <img width="16" height="16" src="https://img.icons8.com/pastel-glyph/64/document--v3.png" alt="document--v3"/>
          </Link>
        </motion.div>
      </section>
      <WorksHomePage />
      <Works/>
    </div>
  );
};

export default Home;
