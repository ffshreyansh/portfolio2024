import Link from 'next/link'
import React from 'react'
const Works = () => {
  return (
    <div className='py-10 lg:py-32 lg:px-0 w-full lg:w-3/4 mx-auto' id='works'>
      <div className='text-center px-2 lg:px-14'>
        <h3 className='text-2xl lg:text-4xl font-bold'>Sleek, Scalable and Robust Web Application</h3>
        <p className='text-sm lg:text-xl font-normal mt-4 text-gray-600'>I use <a href='https://react.dev/'><u>React</u></a> & <a href='https://tailwindcss.com/'><u>TailwindCSS</u></a> to beautify the frontend where as <a href='https://nodejs.org/en'><u>NodeJs</u></a> & <a href='https://mongodb.com'><u>MongoDb</u></a> combined with <a href='https://nextjs.org'><u>NextJs</u></a> framework to develop scalable web applications.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
      <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className='w-full rounded-t-xl' src="/withBg/brinjal.webp" alt="Brinjal Website Image" width={'100%'} />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Brinjal -Shop & Beyond</h6>
              <p className=' leading-snug'>Fully equipped scalable ecommerce application to handle admin functions and client requests</p>
              <Link href={"https://brinjal.vercel.app/"} className='bg-black text-white w-full lg:w-1/2 h-12 font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className='w-full rounded-t-xl' src="/withBg/crumbs.webp" alt="Crumbs web app image" width={'100%'} />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Crumbs - Dating Web App</h6>
              <p className=' leading-snug'>A web app aking to tinder, user can create profile, match, and chat with matched user.
</p>
              <Link href={"https://crumbs-web-app.vercel.app/"} target='_blank' className='bg-black text-white w-full lg:w-1/2 h-12 font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className='w-full rounded-t-xl' src="/withBg/uxh.webp" alt="Uxhack website image" width={'100%'} />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>UxHack - Frontend</h6>
              <p className=' leading-snug'>The World's only Hackathon platform for Product & Design professionals to Learn, Compete, Prepare & Earn
</p>
              <Link href={"https://uxhack.co"} target='_blank' className='bg-black text-white w-full lg:w-1/2 h-12 font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className='w-full rounded-t-xl' src="/withBg/portf.webp" alt="Portfolio website image" width={'100%'} />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Developer Portfolio</h6>
              <p className=' leading-snug'>Portfolio Template for developers, designers, custom built, fast and optimized web app</p>
              <Link href={"https://nivedita.vercel.app/"} className='bg-black text-white w-full lg:w-1/2 h-12 font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>
        
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className='w-full rounded-t-xl' src="/withBg/rool.webp" alt="Rollland Lawfirm Image" width={'100%'} />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Rolland Law Firm - Frontend</h6>
              <p className=' leading-snug'>Professional portfolio for law firm, to showcase client testimonials, goals, process, team and firm's information.</p>
              <Link href={"https://rolland-lawfirm.vercel.app/"} target='_blank' className='bg-black text-white w-full lg:w-1/2 h-12 font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>
        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300' >
          <img className=' rounded-t-xl' src="/withBg/aussie.webp" alt="admin" width={'100%'} />
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Aussie Youth Care - Frontend</h6>
              <p className=' leading-snug'>Redesigned wordpress website using elementor as per the client's requirement.</p>
              <Link href={"https://www.aussieyouthcare.com.au/"} target='_blank' className='bg-black text-white w-full lg:w-1/2 h-12 font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>

        <div className='flex flex-col items-start h-fit border rounded-xl hover:-mt-1 hover:shadow-md transition-all duration-300 blur-sm pointer-events-none'>
          <img className=' rounded-t-xl' src="/withBg/aussie.webp" alt="admin"  width={'100%'}/>
          <div className='px-8 py-6 flex flex-col items-start justify-between gap-3'>
              <h6 className='font-bold font-inter text-lg'>Next Project Ongoing</h6>
              <p className=' leading-snug'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, et!</p>
              <Link href={"#"} target='_blank' className='bg-black text-white w-full lg:w-1/2 h-12 cursor-none pointer-events-none font-medium flex items-center justify-center text-sm rounded-lg'>Explore</Link>
          </div>
        </div>
        
       
        
      </div>

    </div>
  )
}

export default Works