import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const projectManagerNew = () => {
    useEffect(() => {
        Aos.init({ })
      }, [])

  return (
    <div data-aos='fade-up' data-aos-duration={500} className='w-full h-full px-10 font-nunitoSans flex flex-col items-center'>
        <div className='w-full h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[23rem] xl:h-[24rem] 2xl:h-[25rem] flex flex-col justify-end items-center'>
            <h1 className='text-[#185533] dark:text-[#8fdcc1] absolute mb-[7.5rem] font-extrabold text-[2.75rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]'>
                Project Manager
            </h1>
            <div className='w-full h-[3rem] mb-12 flex justify-center items-center'>
                <p className='text-center text-sm md:text-base lg:text-lg text-gray-600'>
                    React JS &#x2022; Node JS &#x2022; Express JS &#x2022; MondoDB &#x2022; GraphQL &#x2022; Apollo Client &#x2022; Bootstrap CSS
                </p>
            </div>
        </div>
        <div >
            <Image priority src='/images/projectManagerImageFigma.svg' alt='wordle' width={1300} height={850} className='rounded-lg shadow-2xl' />
        </div>
        <div className='w-full h-full mt-12 flex justify-evenly lg:mt-16 xl:mt-20 md:w-[50%] '>
            <a href='https://project-manager-mern.onrender.com/' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold outline outline-[#185533] px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                Demo
            </a>
            <a href='https://github.com/GabrielMurry/project-manager-frontend' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold outline outline-[#185533] px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'> 
                Code
            </a>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Overview
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                A quick and easy way to organize completed, current, or future project ideas.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                With appealing visuals and a simple UI, users can immediately understand how to add new users and projects, filter projects, and delete users or projects. 
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Goals
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Build a fullstack project on the MERN stack and implement GraphQL and APollo Client.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Manage CRUD operations through mutations and queries based on Mongoose and GraphQL schemas.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Avoid redundant network requests - Use Apollo's in-memory cache for immediate response to already cached queries without sending another network request.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Implement dynamic page routing using React Router Dom for users to view each project.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Learn Bootstrap CSS for easier and more efficient styling, and implement modals for better user experience.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                When deleting a user, all projects associated with that user ID gets deleted and updated on the home page.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Allow users to filter projects based on status.
            </p>
        </div> 
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Next Steps
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Implement GraphQL's pagination or infinite scroll to load more projects and more users.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Advanced filter options by layering multiple filters - projects based on user, start date, and time it took to complete projects.
            </p>
        </div>
        <Link href={'/chess'} className='text-white bg-[#185533] dark:bg-[#298050] px-8 py-5 rounded-full text-center mt-20 lg:mt-24 xl:mt-28 outline outline-[#185533] text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
            Chess AI
        </Link>
    </div>
  )
}

export default projectManagerNew