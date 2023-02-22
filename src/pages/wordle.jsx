import Image from 'next/image'
import React from 'react'
import wordleImage from '../../public/assets/projects/wordle.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

const wordle = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image src={wordleImage} alt='/' layout='fill' objectFit='cover' className='absolute z-1' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>
                    Wordle Clone
                </h2>
                <h3>
                    React JS / Node JS / Express JS / MongoDB 
                </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2 className='mb-2'>
                    Overview
                </h2>
                <p>
                    Created a Wordle clone application on the MERN stack. Styled in CSS for mobile and desktop, with a focus on clean UI and accessibility. Utilized React hooks and handlers such as useState, useEffect, forwardRef, useImperativeHandle, and useCallback. Included user authentication with JWT access, refresh tokens, and cookies - created a REST API to issue the client application&apos;s access and refresh token in an httpOnly cookie for better security. Encrypted user login passwords using bcrypt and salt, with persist login state on refresh. Engineered CRUD operations on user data for MongoDB and displayed statistics on a global player leaderboard. Challenged myself to write my first fullstack program, and drawing diagrams to map out individual components and features to stay organized. This project was dedicated to a good friend of mine who loves Wordle, but did not want to wait a full day to play a new game.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href='https://wordle-mern.onrender.com/'>
                        Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/GabrielMurry/wordle-MERN">
                        Code
                    </a>
                </button>
                <Link href='/#projects'>
                    <BsArrowLeft size={60} className='shadow-xl shadow-gray-400 rounded-xl p-4 mt-10' />
                </Link> 
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>  
                    <p className='text-center font-bold pb-2'>
                        Technologies
                    </p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> React JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Node JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Express JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> MongoDB
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Axios
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Mongoose JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CORS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> JWT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default wordle