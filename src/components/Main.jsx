import React, { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from "react-redux";
import { inViewTrue, inViewFalse } from "../slices/inViewSlice";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'

function Main() {
  const router = useRouter()

  const { ref, inView } = useInView({ threshold: 0.5 })
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (inView) {
        dispatch(inViewTrue('Home'))
    }
    else {
        dispatch(inViewFalse('Home'))
    }
  }, [inView])

  useEffect(() => {
    Aos.init({ })
  }, [])

  return (
    <div id='home' ref={ref} className='w-full h-full pt-[9rem] text-center bg-gradient-radial dark:bg-gradient-radial-dark animate-gradient-x'>
        <div className='w-full h-[75%] max-auto p-2 flex justify-center items-center'>
            <div>
                <div>
                    <h1 data-aos='fade' data-aos-duration={700} className='py-4 text-[#185533] dark:text-[#8fdcc1] font-nunitoSans font-extrabold text-[3.3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]'>
                        Hi, I&apos;m Gabriel
                    </h1>
                    <h1  data-aos='fade' data-aos-delay={150} className='py-2 text-[#185533] dark:text-[#8fdcc1] font-nunitoSans text-[2.6rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]'>
                        Software Engineer
                    </h1>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[20rem] sm:w-[95%]'>
                        <p data-aos='fade' data-aos-duration={500} data-aos-delay={200} className='pt-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-100 text-sm sm:text-base md:text-lg font-lato'>
                            Programming and collaborating on projects centering frontend and backend web development. 
                        </p>
                        <p data-aos='fade' data-aos-duration={500} data-aos-delay={250} className='pt-1 text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-100 text-sm sm:text-base md:text-lg font-lato'>
                            Emphasizing accessibility and a user-first approach.
                        </p>
                        <p data-aos='fade' data-aos-duration={500} data-aos-delay={300} className='py-1 text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-100 text-sm sm:text-base md:text-lg font-lato'>
                            Currently learning full-stack database management. 
                        </p>
                        <span data-aos='fade' data-aos-duration={500} data-aos-delay={350} className='text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-100 text-sm sm:text-base md:text-lg font-lato'>
                            This portfolio was built using <a href="https://nextjs.org" className='font-semibold hover:text-white dark:hover:text-gray-700 transition duration-200 ease-in-out group font-inter relative inline-flex overflow-hidden'>
                                <div className='absolute bg-[#185533] dark:bg-[#8fdcc1] inset-0 translate-y-4 sm:translate-y-5 md:translate-y-6 group-hover:translate-y-0 transition duration-100 ease-out' />
                                <span className='relative'>
                                    Next.js
                                </span>
                            </a> and <a href="https://tailwindcss.com" className='font-semibold hover:text-white dark:hover:text-gray-700 transition duration-200 ease-in-out group font-inter relative inline-flex overflow-hidden'>
                                <div className='absolute bg-[#185533] dark:bg-[#8fdcc1] inset-0 translate-y-4 sm:translate-y-5 md:translate-y-6 group-hover:translate-y-0 transition duration-100 ease-out' />
                                <span className='relative'>
                                    Tailwind CSS.
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
                <div className='pt-[2rem] flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div data-aos='fade' data-aos-duration={500} data-aos-delay={400} className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/gabrielmurry">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div data-aos='fade' data-aos-duration={500} data-aos-delay={400} className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://github.com/GabrielMurry">
                            <FaGithub />
                        </a>
                    </div>
                    <div data-aos='fade' data-aos-duration={500} data-aos-delay={400} className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail onClick={() => router.push('mailto:gabrielmurry.work@gmail.com')} />
                    </div>
                    <div data-aos='fade' data-aos-duration={500} data-aos-delay={400} className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="/assets/resume.pdf" >
                            <BsFillPersonLinesFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="projects" data-aos='fade' data-aos-duration={500} data-aos-delay={500} data-aos-offset={0} className='w-full h-full pt-[9rem] sm:pt-[8rem] md:pt-[6rem] lg:pt-[2.5rem] overflow-hidden flex flex-col items-center'>
            {/* wordle module */}
            <div className='relative w-full h-[20rem] lg:h-[34rem] flex justify-center'>
                {/* transition-shrink-letter-space hover:tracking-normal duration-500 */}
                <Link href={'/wordle'} className='bg-[#a3dcd4] transition ease-in-out hover:bg-[#91d8cd] hover:shadow-2xl duration-500 group absolute overflow-hidden w-[20rem] sm:w-[95%] h-full rounded-3xl lg:rounded-[4rem]'>
                    <div data-aos='fade' data-aos-duration={500} data-aos-once={true} className='absolute w-full flex justify-end'>
                        <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mr-[1rem] mt-12 sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                            Wordle
                        </span>
                    </div>
                    {/* wordle image */}
                    <div data-aos='fade' data-aos-duration={500} data-aos-offset={50} data-aos-once={true} className='relative w-[200vw] 2xl:w-full h-full top-40 left-14 2xl:left-0 2xl:flex 2xl:flex-col 2xl:items-center'>
                        <Image priority src='/images/wordleImageFigma.svg' alt='wordle' width={1300} height={850} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                    </div>
                </Link>
            </div>

            {/* project manager and chess ai module */}
            <div className='relative mt-[4rem] lg:mt-[10rem] w-full h-[44rem] lg:h-[34rem] flex justify-evenly items-center'>
                <div className='w-[95%] h-full flex flex-col items-center lg:flex-row justify-between'>
                    <Link href={'projectManager'} className='bg-[#e7b99c] transition ease-in-out hover:bg-[#e8b291] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[60%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem]'>
                        <div data-aos='fade' data-aos-duration={500} data-aos-once={true} className='absolute w-full flex justify-end'>
                            <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mr-[1rem] mt-12 sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                                Project Manager
                            </span>
                        </div>
                        {/* project manager image */}
                        <div data-aos='fade' data-aos-duration={500} data-aos-offset={50} data-aos-once={true} className='relative w-[200vw] h-full top-40 left-14'>
                            <Image priority src='/images/projectManagerImageFigma.svg' alt='project manager' width={1300} height={850} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                        </div>
                    </Link>
                    <Link href={'/chess'} className='bg-[#fffcc1] transition ease-in-out hover:bg-[#fcf8b2] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[36%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem] flex justify-center'>
                        <div data-aos='fade' data-aos-duration={500} data-aos-once={true} className='absolute w-full flex justify-end'>
                            <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[3rem] mt-12 mr-[1rem] lg:mr-[2rem] sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                                Chess AI
                            </span>
                        </div>
                        {/* chess ai image */}
                        <div data-aos='fade' data-aos-duration={500} data-aos-offset={50} data-aos-once={true} className='w-[26rem] h-[26rem] absolute sm:relative lg:absolute 2xl:relative top-40 left-14 sm:left-0 lg:left-14 2xl:left-0 transition ease-in-out group-hover:translate-y-5 duration-500'>
                            <Image priority src='/images/chessImageFigma.svg' alt='chess' width={800} height={800} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                        </div>
                    </Link>
                </div>
            </div>

            {/* map router and sudoku solver module */}
            <div className='relative mt-[4rem] lg:mt-[10rem] w-full h-[44rem] lg:h-[34rem] flex justify-evenly items-center'>
                <div className='w-[95%] h-full flex flex-col-reverse items-center lg:flex-row justify-between'>
                    <Link href={'/sudokuSolver'} className='bg-[#fcd4c5] transition ease-in-out hover:bg-[#feccba] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[36%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem] flex justify-center'>
                        <div data-aos='fade' data-aos-duration={500} data-aos-once={true} className='absolute w-full flex justify-end'>
                            <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[3rem] mt-12 mr-[1rem] lg:mr-[2rem] sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                                Sudoku Solver
                            </span>
                        </div>
                        {/* sudoku solver image */}
                        <div data-aos='fade' data-aos-duration={500} data-aos-offset={50} data-aos-once={true} className='w-[26rem] h-[26rem] absolute sm:relative lg:absolute 2xl:relative top-40 left-14 sm:left-0 lg:left-14 2xl:left-0 transition ease-in-out group-hover:translate-y-5 duration-500'>
                            <Image priority src='/images/sudokuSolverImageFigma.svg' alt='sudoku solver' width={803} height={803} className='transition ease-in-out group-hover:translate-y-5 duration-500' />
                        </div>
                    </Link>
                    <Link href={'/mapRouter'} className='bg-[#bedffa] transition ease-in-out hover:bg-[#b4d9f8] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[60%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem]'>
                        <div data-aos='fade' data-aos-duration={500} data-aos-once={true} className='absolute w-full flex justify-end'>
                            <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mt-12 mr-[1rem] sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                                Map Router
                            </span>
                        </div>
                        {/* map router image */}
                        <div data-aos='fade' data-aos-duration={500} data-aos-offset={50} data-aos-once={true} className='relative w-[200vw] h-full top-40 left-14'>
                            <Image priority src='/images/mapRouterImageFigma.svg' alt='map router' width={1300} height={850} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main