import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='w-full h-full max-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Let us Build Something Together
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I am <span className='text-[#5651e5]'> Gabriel </span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    Software Engineer
                </h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint repudiandae dolore neque aperiam at! Magni in, voluptas, dolorem sint officia culpa inventore quod molestias minima omnis dolor incidunt cupiditate. Doloremque!
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main