import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const wordleNew = () => {
    useEffect(() => {
        Aos.init({ })
      }, [])

  return (
    <div data-aos='fade-up' data-aos-duration={500} className='w-full h-full px-10 font-nunitoSans flex flex-col items-center'>
        <div className='w-full h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[23rem] xl:h-[24rem] 2xl:h-[25rem] flex flex-col justify-end items-center'>
            <h1 className='text-[#185533] dark:text-[#8fdcc1] mb-5 font-extrabold text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]'>
                Wordle
            </h1>
            <div className='w-full h-[3rem] mb-12 flex justify-center items-center'>
                <p className='text-sm md:text-base lg:text-lg text-gray-600'>
                    React JS &#x2022; Node JS &#x2022; Express JS &#x2022; MondoDB
                </p>
            </div>
        </div>
        <div>
            <Image priority src='/images/wordleImageFigma.svg' alt='wordle' width={1300} height={850} className='rounded-lg shadow-2xl' />
        </div>
        <div className='w-full h-full mt-12 flex justify-evenly lg:mt-16 xl:mt-20 md:w-[50%] '>
            <a href='https://wordle-mern.onrender.com/' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold outline outline-[#185533] px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                Demo
            </a>
            <a href='https://github.com/GabrielMurry/wordle-MERN' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold outline outline-[#185533] px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'> 
                Code
            </a>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Overview
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                A fully functional and responsive Wordle clone created on the MERN stack.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                For a more personal experience, I included user authentication with JWT access, refresh tokens, and cookies. This enabled me to perform CRUD operations on user data (stored in MongoDB) to display individual and global statistics on a leaderboard, so users can compare and compete against eachother. 
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 flex flex-col items-center'>
            <div className='w-full md:w-[50%] h-full'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Emphasis on Mobile
                </h2>
            </div>
            <div className='w-full md:w-[70%] h-full mt-3 lg:mt-5 xl:mt-7'>
                <div className='flex justify-evenly'>
                    <Image priority src='/images/wordleMobileSignInImageFigma.svg' alt='wordle mobile sign in' width={175} height={850} className='lg:w-[17rem] xl:w-[20rem] rounded-[2rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    <Image priority src='/images/wordleMobileImageFigma.svg' alt='wordle mobile' width={175} height={850} className='lg:w-[17rem] xl:w-[20rem] rounded-[2rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                </div>
            </div>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Goals
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Build a fullstack project from scratch.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Strengthen my skills in React, Express, and Node.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Create a responsive, user-friendly design using CSS with a mobile-first approach.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Deploy my frontend and backend separately with continuous deployment. 
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Have the backend and API run "indefinitely", receiving requests and sending responses from the frontend.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Manage user info, data, and statistics in MongoDB using Mongoose Schemas.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Engineer CRUD operations on user data to display statistics on a global player leaderboard.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Create a REST API to issue the client app's access and refresh token in an httpOnly cookie for better security.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Encrypt user login passwords using bcrypt and salt, with persist login state on refresh.
            </p>
        </div> 
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Next Steps
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Real-time multiplayer - play against a friend to see who can guess the correct word first.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Allow users to choose customizable color palettes.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Display a page of personal data with graphs and charts based on win/loss percentages, average time-to-win, win probabilities for each row, etc.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                For inclusivity (and personal foreign language practice), add language options such as Spanish. May require an API to access other random foreign language solution word.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add a "forgot my password" option on the login page.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add an option to delete account.
            </p>
        </div>
        <Link href={'/projectManager'} className='text-white bg-[#185533] dark:bg-[#298050] px-8 py-5 rounded-full text-center mt-20 lg:mt-24 xl:mt-28 outline outline-[#185533] text-[1.9rem] md:text-[3rem] lg:text-[4rem] font-extrabold transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
            Project Manager
        </Link>
    </div>
  )
}

export default wordleNew