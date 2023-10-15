import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const sudokuSolverNew = () => {
    useEffect(() => {
        Aos.init({ })
      }, [])

    return (
        <div data-aos='fade-up' data-aos-duration={500} className='w-full h-full px-10 font-nunitoSans flex flex-col items-center'>
            <div className='w-full h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[23rem] xl:h-[24rem] 2xl:h-[25rem] flex flex-col justify-end items-center'>
                <h1 className='text-[#185533] dark:text-[#8fdcc1] absolute mb-[7.5rem] font-extrabold text-[3rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]'>
                    Sudoku Solver
                </h1>
                <div className='w-full h-[3rem] mb-12 flex justify-center items-center'>
                    <p className='text-sm md:text-base lg:text-lg text-gray-600'>
                        JavaScript &#x2022; Express jS &#x2022; CSS &#x2022; HTML
                    </p>
                </div>
            </div>
            <div>
                <Image priority src='/images/sudokuSolverImageFigma.svg' alt='wordle' width={803} height={803} className='shadow-2xl' />
            </div>
            <div className='w-full h-full mt-12 flex justify-evenly lg:mt-16 xl:mt-20 md:w-[50%] '>
                <a href='https://solvethesudoku.vercel.app/' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                    Demo
                </a>
                <a href='https://github.com/GabrielMurry/sudoku-solver-frontend' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'> 
                    Code
                </a>
            </div>
            <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Overview
                </h2>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    A user-friendly way to solve a sudoku puzzle by simply inputting the given values on the board.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Used a public API from RapidAPI to send requests of inputted values on the board and receive a response of the solution that fills the remaining empty squares.
                </p>
            </div>
            <div className='bg-red-200w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Goals
                </h2>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Solve any sudoku puzzle after user submits the given values.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Utilize and understand APIs.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Learn and implement promise-based HTTP clients such as Axios to handle HTTP requests and transformation of request and response data from the browser.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Use Express JS to easily and quickly manage servers and routes to build a web application.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Understand the importance of CORS and cross origin access and credentials.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Hide my API key in a .env file, using dotenv package to extract that key.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Learn to deploy the project and implement my hidden API key as an environment variable.
                </p>
            </div> 
            <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Next Steps
                </h2>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Build a better UI that is more responsive and works on mobile devices.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Add a "isLoading" spinner to tell the user that the app is solving the puzzle while it fetches the data.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Provide an option for the user to point their camera at the printed, unsolved sudoku puzzle and the program solves the puzzle in real-time (without needing to tkae an actual picture).
                </p>
            </div>
            <Link href={'/'} className='text-white bg-[#185533] dark:bg-[#298050] px-8 py-5 rounded-full text-center mt-20 lg:mt-24 xl:mt-28 text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                Projects
            </Link>
        </div>
      )
}

export default sudokuSolverNew