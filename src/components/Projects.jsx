import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsTest = () => {
  return (
    <div id="projectstest" className='w-full h-full overflow-hidden flex flex-col items-center'>
        {/* wordle module */}
        <div className='relative w-full h-[20rem] lg:h-[34rem] flex justify-center'>
            {/* transition-shrink-letter-space hover:tracking-normal duration-500 */}
            <Link href={'/wordle'} className='bg-[#a3dcd4] transition ease-in-out hover:bg-[#91d8cd] hover:shadow-2xl duration-500 group absolute overflow-hidden w-[20rem] sm:w-[95%] h-full rounded-3xl lg:rounded-[4rem]'>
                <div className='absolute w-full flex justify-end'>
                    <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mr-[1rem] mt-12 sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                        Wordle
                    </span>
                </div>
                {/* wordle image */}
                <div className='relative w-[200vw] 2xl:w-full h-full top-40 left-14 2xl:left-0 2xl:flex 2xl:flex-col 2xl:items-center'>
                    <Image priority src='/images/wordleImageFigma.svg' alt='wordle' width={1300} height={850} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                </div>
            </Link>
        </div>

        {/* project manager and chess ai module */}
        <div className='relative mt-[4rem] lg:mt-[10rem] w-full h-[44rem] lg:h-[34rem] flex justify-evenly items-center'>
            <div className='w-[95%] h-full flex flex-col items-center lg:flex-row justify-between'>
                <Link href={'projectManager'} className='bg-[#e7b99c] transition ease-in-out hover:bg-[#e8b291] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[60%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem]'>
                    <div className='absolute w-full flex justify-end'>
                        <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mr-[1rem] mt-12 sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                            Project Manager
                        </span>
                    </div>
                    {/* project manager image */}
                    <div className='relative w-[200vw] h-full top-40 left-14'>
                        <Image priority src='/images/projectManagerImageFigma.svg' alt='project manager' width={1300} height={850} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                    </div>
                </Link>
                <Link href={'/chess'} className='bg-[#fffcc1] transition ease-in-out hover:bg-[#fcf8b2] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[36%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem] flex justify-center'>
                    <div className='absolute w-full flex justify-end'>
                        <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[3rem] mt-12 mr-[1rem] lg:mr-[2rem] sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                            Chess AI
                        </span>
                    </div>
                    {/* chess ai image */}
                    <div className='w-[26rem] h-[26rem] absolute sm:relative lg:absolute 2xl:relative top-40 left-14 sm:left-0 lg:left-14 2xl:left-0 transition ease-in-out group-hover:translate-y-5 duration-500'>
                        <Image priority src='/images/chessImageFigma.svg' alt='chess' width={800} height={800} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                    </div>
                </Link>
            </div>
        </div>

        {/* map router and sudoku solver module */}
        <div className='relative mt-[4rem] lg:mt-[10rem] w-full h-[44rem] lg:h-[34rem] flex justify-evenly items-center'>
            <div className='w-[95%] h-full flex flex-col-reverse items-center lg:flex-row justify-between'>
                <Link href={'/sudokuSolver'} className='bg-[#fcd4c5] transition ease-in-out hover:bg-[#feccba] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[36%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem] flex justify-center'>
                    <div className='absolute w-full flex justify-end'>
                        <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[3rem] mt-12 mr-[1rem] lg:mr-[2rem] sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                            Sudoku Solver
                        </span>
                    </div>
                    {/* sudoku solver image */}
                    <div className='w-[26rem] h-[26rem] absolute sm:relative lg:absolute 2xl:relative top-40 left-14 sm:left-0 lg:left-14 2xl:left-0 transition ease-in-out group-hover:translate-y-5 duration-500'>
                        <Image priority src='/images/sudokuSolverImageFigma.svg' alt='sudoku solver' width={803} height={803} className='transition ease-in-out group-hover:translate-y-5 duration-500' />
                    </div>
                </Link>
                <Link href={'/mapRouter'} className='bg-[#bedffa] transition ease-in-out hover:bg-[#b4d9f8] hover:shadow-2xl duration-500 group relative w-[20rem] sm:w-full lg:w-[60%] h-[20rem] lg:h-full overflow-hidden rounded-3xl lg:rounded-[4rem]'>
                    <div className='absolute w-full flex justify-end'>
                        <span className='font-nunitoSans text-[#364442] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mt-12 mr-[1rem] sm:tracking-widest sm:mr-[4rem] transition-shrink-letter-space group-hover:tracking-normal duration-500'>
                            Map Router
                        </span>
                    </div>
                    {/* map router image */}
                    <div className='relative w-[200vw] h-full top-40 left-14'>
                        <Image priority src='/images/mapRouterImageFigma.svg' alt='map router' width={1300} height={850} className='rounded-xl transition ease-in-out group-hover:translate-y-5 duration-500' />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectsTest