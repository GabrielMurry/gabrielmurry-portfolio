import Image from 'next/image'
import React from 'react'
import projectManagerImage from '../../public/assets/projects/projectManager.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

const wordle = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image src={projectManagerImage} alt='/' layout='fill' objectFit='cover' className='absolute z-1' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>
                    Project Manager
                </h2>
                <h3>
                    React JS / Node JS / Express JS / MongoDB / GraphQL / Bootstrap CSS / Apollo Client 
                </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2 className='mb-2'>
                    Overview
                </h2>
                <p>
                    Developed a project management system to house my past, current, and future project ideas. While this application was created on the MERN stack, my intentions were to understand and include GraphQL and Apollo Client to learn the ins-and-outs of query languages with server-side runtimes as well as state management libraries. I managed CRUD operations through mutations and queries based on Mongoose, MongoDB, and GraphQL schemas. For better user experience, I implemented Apollo&apos;s in-memory cache for immediate response times from already cached queries. This avoids repetitive and redundant network requests. All data, categorized under users and projects, are stored within the same MongoDB database container, but in separate sub-containers. Every user (client) has a client ID, which is referenced under each project. Linking each project to the specific user provides cohesion. It allows for better organization, especially when different users enter their projects. It also provides an efficient way for all user projects to be deleted upon a user deleting their User Account. I continued to hone my frontend UI skills, incorporating a responsive design for both desktop and mobile using Bootstrap CSS. I also understood and implemented more advanced routing techniques, such as React Router Dom&apos;s dynamic page routing system. 
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href='https://project-manager-mern.onrender.com/'>
                        Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/GabrielMurry/project-manager-frontend">
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
                            <RiRadioButtonFill className='pr-1' /> Bootstrap CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Apollo Client
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Mongoose JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Express GraphQL
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CORS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default wordle