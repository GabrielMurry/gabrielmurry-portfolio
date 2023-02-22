import Image from 'next/image'
import React from 'react'
import chessImage from '../../public/assets/projects/chess.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

const chess = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image src={chessImage} alt='/' layout='fill' objectFit='cover' className='absolute z-1' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>
                    Chess AI
                </h2>
                <h3>
                    JavaScript / HTML
                </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2 className='mb-2'>
                    Overview
                </h2>
                <p>
                    During COVID lockdown, I got into chess, and challenged myself to build a chess AI. This is version 2, as I decided to completely rewrite my original chess AI (version 1) due to disorganized code preventing me from adequately implementing further optimizations. 
                    For this chess AI (version 2) I have implemented the minimax algorithm as the foundation for the AI. 
                    I then utilized alpha-beta pruning, which prunes certain branches in the minimax recursion tree that are deemed irrelevant and unnecessary to search. This improves the efficiency of the minimax algorithm.
                    I created heuristic boards for each chess piece to prioritize move ordering via priority queues which optimizes the effectiveness of alpha-beta pruning (by providing the algorithm with moves that are most likely the best for each chess piece, alpha-beta pruning can better determine which branches to immediately eliminate cutting down computations significantly).
                    Developed and implemented a transposition table to improve efficiency by hashing Zobrist keys using bitwise operation (XOR) for every new board configuration, avoiding repeated board configurations that are inevitable. For the future, my version 3 chess AI will contain a clean UI, options to change depth and difficulty of AI, and more efficient optimizations such as magic bitboards and implementing opening-move databases and theories. 
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href='https://chess-ai-v2.vercel.app'>
                        Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href='https://github.com/GabrielMurry/Chess_AI_v2'>
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
                            <RiRadioButtonFill className='pr-1' /> JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> p5 JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CSS
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default chess