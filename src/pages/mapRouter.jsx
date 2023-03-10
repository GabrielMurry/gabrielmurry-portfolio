import Image from 'next/image'
import React from 'react'
import mapRouterImage from '../../public/assets/projects/mapRouter.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

const mapRouter = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image src={mapRouterImage} alt='/' layout='fill' objectFit='cover' className='absolute z-1' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>
                    Map Router
                </h2>
                <h3>
                    React JS / HTML / CSS 
                </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2 className='mb-2'>
                    Overview
                </h2>
                <p>
                    A map routing program that provides the fastest route to a destination given real-time traffic flow and incident updates. I utilized the Tom-Tom Map SDK and API for fast and efficient matrix routing. Tom-Tom&apos;s API requires latitude and longitude. I originally had the user input the specific latitude and longitude of the location they wanted. However, this was highly inefficient and not user friendly. Instead, I implemented a geocode address converter from Rapid API that takes in any address or location request and responds with the latitude and longitude of that location. I then used that latitude and longitude response in Tom-Tom&apos;s API request query to output that given location on the map. Both Tom-Tom the and Rapid API keys are hidden as buildtime environment variables in Vercel. The biggest challenge was synthesizing technical documentation for the SDK maps and services to build an efficient router and for handling errors. For the future, I will include a time to reach destination from your current location for both a car and on foot. 
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href='https://map-router.vercel.app'>
                        Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/GabrielMurry/Map-routing">
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
                            <RiRadioButtonFill className='pr-1' /> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> TomTom
                        </p>
                        <p className='text-gray-600 py-2 flex items-center dark:text-gray-100'>
                            <RiRadioButtonFill className='pr-1' /> Rapid API
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default mapRouter