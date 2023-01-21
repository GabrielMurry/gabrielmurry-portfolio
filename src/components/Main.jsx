import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Main = () => {
    const router = useRouter()

  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='w-full h-full max-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700 dark:text-gray-100'>
                    Hi, I&apos;m <span className='text-[#5394f6]'> Gabriel </span>
                </h1>
                <h1 className='py-2 text-gray-700 dark:text-gray-100'>
                    Software Engineer
                </h1>
                <p className='pt-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-100'>
                    Designing, programming, and contributing to projects centering UI with a user-first approach. Currently learning full-stack development with an emphasis on backend. 
                </p>
                <p className='text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-100'>
                    This portfolio was built using <a href="https://nextjs.org" className='font-semibold group font-inter relative inline-flex overflow-hidden'>
                        <div className='absolute bg-[#5394f6]/50 dark:bg-[#5394f6] inset-0 translate-y-5 group-hover:translate-y-0 transition duration-100 ease-out'></div>
                        <span className='relative'>
                            Next.js
                        </span>
                    </a> and <a href="https://tailwindcss.com" className='font-semibold group font-inter relative inline-flex overflow-hidden'>
                        <div className='absolute bg-[#5394f6]/50 dark:bg-[#5394f6] inset-0 translate-y-5 group-hover:translate-y-0 transition duration-100 ease-out'></div>
                        <span className='relative'>
                            Tailwind CSS.
                        </span>
                    </a>
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/gabrielmurry">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://github.com/GabrielMurry">
                            <FaGithub />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail onClick={() => router.push('mailto:gabrielmurry.work@gmail.com')} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="/assets/resume.pdf" >
                            <BsFillPersonLinesFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main