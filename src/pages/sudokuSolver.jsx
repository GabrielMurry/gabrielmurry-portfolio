import Image from 'next/image'
import React from 'react'
import sudokuSolverImage from '../../public/assets/projects/sudokuSolver.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

const property = () => {

  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image src={sudokuSolverImage} alt='/' layout='fill' objectFit='cover' className='absolute z-1' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>
                    Sudoku Solver
                </h2>
                <h3>
                    JavaScript / CSS / HTML 
                </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>
                    Project
                </p>
                <h2>
                    Overview
                </h2>
                <p>
                    The purpose of this project was to dip my toes into APIs. I used a public API from RapidAPI and my own hidden key to send requests of inputted values on the sudoku board and receive a response of the solution that fills the remaining empty squares on the board. For user accessibility, I built a replica sudoku board for users to input values. I learned how to gather join that inputted data to send to our backend using the API, receive a response and display those solution values back on the grid.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href='https://sudoku-solver-pied.vercel.app'>
                        Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/GabrielMurry/Sudoku-solver">
                        Code
                    </a>
                </button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>  
                    <p className='text-center font-bold pb-2'>
                        Technologies
                    </p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Rapid API
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Axios
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Express JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CORS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> dotenv
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <BsArrowLeft size={60} className='shadow-xl shadow-gray-400 rounded-xl p-4' />
            </Link> 
        </div>

    </div>
  )
}

export default property