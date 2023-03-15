import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const chessNew = () => {
    useEffect(() => {
        Aos.init({ })
      }, [])

  return (
    <div data-aos='fade-up' data-aos-duration={500} className='w-full h-full px-10 font-nunitoSans flex flex-col items-center'>
        <div className='w-full h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[23rem] xl:h-[24rem] 2xl:h-[25rem] flex flex-col justify-end items-center'>
            <h1 className='text-[#185533] dark:text-[#8fdcc1] mb-5 font-extrabold text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]'>
                Chess AI
            </h1>
            <div className='w-full h-[3rem] mb-12 flex justify-center items-center'>
                <p className='text-sm md:text-base lg:text-lg text-gray-600'>
                    JavaScript &#x2022; HTML
                </p>
            </div>
        </div>
        <div>
            <Image priority src='/images/chessImageFigma.svg' alt='wordle' width={800} height={800} className='rounded-lg shadow-2xl' />
        </div>
        <div className='w-full h-full mt-12 flex justify-evenly lg:mt-16 xl:mt-20 md:w-[50%] '>
            <a href='https://chess-ai-v2.vercel.app' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold outline outline-[#185533] px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                Demo
            </a>
            <a href='https://github.com/GabrielMurry/Chess_AI_v2' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold outline outline-[#185533] px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'> 
                Code
            </a>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Overview
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Being an avid Chess player, I challenged myself to build a chess AI from scratch. The AI can look 3 or 4 moves ahead, depending on the difficulty chosen by the user.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                There's a beautiful art in algorithms. 
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                The Algorithms
            </h2>
            <h3 className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]'>
                Minimax
            </h3>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                A recursive backtracking algorithm as the foundation for the AI. While its functionality is to search every possible board configuration to determine the best move, it uses brute force, and thus wildly inefficient for a game such as chess.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                For example, the computer will have to calculate:
            </p>
            <div className='flex justify-center'>
                <ul className='list-disc w-[90%]'> 
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        400 possible positions (games) after the <span className='underline'>first</span> move by each player
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        200,000 possible positions after the <span className='underline'>second</span> move by each player
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        120 million possible positions after the <span className='underline'>third</span> move by each player
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        85 billion possible positions after the <span className='underline'>fourth</span> move by each player.
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Over 69 trillion possible positions after the <span className='underline'>fifth</span> move by each player.
                    </li>
                    <p className='text-center text-gray-600 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] mt-2'>
                        Source:
                        <a href="https://en.wikipedia.org/wiki/Shannon_number" target="_blank"> Wikipedia</a>
                    </p>
                </ul>
            </div>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                This means relying solely on the minimax algorithm is impractical. (Unless you like blowing up computers).
            </p>
            <h3 className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]'>
                Alpha Beta Pruning
            </h3>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Prune certain branches in the search tree that are deemed irrelevant and unnecessary to search which speeds up minimax.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Alpha-beta pruning reduces the computational time by a "square root", but only in the best case scenario. What would have taken minimax 100 seconds to determine the best move, will be shortened to only 10 seconds when adding alpha-beta pruning. Sadly, alpha-beta pruning will not typically perform this well, taking an intermediate amount of time to run... unless optimized. 
            </p>
            <h3 className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]'>
                Heuristic Boards
            </h3>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Prioritize move ordering via priority queues to optimize the effectiveness of alpha-beta pruning. We provide the algorithm with moves that are most likely the best for each chess piece to help alpha-beta better determine which branches to immediately eliminate, cutting down computations significantly.
            </p>
            <h3 className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]'>
                Transposition Table
            </h3>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Even though we use an optimized version of alpha-beta pruning to eliminate branches, the minimax algorithm computes many duplicate board configurations in other branches. To eliminate duplicates, we hash every unique board configuration as a key-value pair (Map).
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Each board configuration is represented as a long numeric value called a Zobrist key. This Zobrist key is hashed, and the next board configuration is formed by taking an empty string and perfoming bitwise operation, XOR, on it with the previous Zobrist key to cut down on computation time. XOR operation is reversible which makes this hash useful - we can add and remove pieces from the board efficiently by simply XOR the hash with the Zobrist key.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                The minimax algorithm gives a numeric score for each board configuration which is stored as the value for each Zobrist key. If we come across a board with the same key that is already hashed, then we return the score given to that position. After the AI finds the best move, we clear the key-value pair Map to save memory.
            </p>
        </div> 
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Goals
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Build a functioning chess game where a player can drag and drop pieces (legally) on a board, take pieces, put a King in check, checkmate, en passant, promote pawns, and castle.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Implement a functioning chess AI that plays legal moves.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Have the AI look 3 or 4 moves ahead (depth of 6 or 8 respecitvely).
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Optimize the minimax algorithm through alpha-beta pruning, heuristic boards, and transposition tables.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Test each algorithm incrementally to determine proper behavior and if optimization is taking place.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                
            </p>
        </div> 
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Next Steps
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Redo completely - build a fullstack application that calculates the moves on a server and sends the best move as a response.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Optimize the algorithm further by integrating a magic bit board and quiescence search.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Train the AI on openings, book moves, etc.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Tweak the AI - fix weird repetitive King moves, and if AI is in check, either have pieces protect the King or have the King move.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Allow for checkmate or draw against AI.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Implement a responsive design and an emphasis on mobile.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                More options for difficulty (AI ELO level), as well as an option to play as the black pieces.
            </p>
        </div>
        <Link href={'/mapRouter'} className='text-white bg-[#185533] dark:bg-[#298050] px-8 py-5 rounded-full text-center mt-20 lg:mt-24 xl:mt-28 outline outline-[#185533] text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
            Map Router
        </Link>
    </div>
  )
}

export default chessNew