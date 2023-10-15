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
                Climber's Eye
            </h1>
            <div className='w-full h-[3rem] mb-12 flex justify-center items-center'>
                <p className='text-sm md:text-base lg:text-lg text-gray-600'>
                    React Native &#x2022; Django &#x2022; PostgreSQL &#x2022; Amazon S3
                </p>
            </div>
        </div>
        <div>
            <Image priority src='/images/ClimbersEyeLogoWhiteBackground.svg' alt='wordle' width={1300} height={850} className='rounded-lg shadow-2xl' />
        </div>
        <div className='w-full h-full mt-12 flex justify-evenly lg:mt-16 xl:mt-20 md:w-[50%] '>
            <a href='https://wordle-mern.onrender.com/' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                Demo
            </a>
            <a href='https://github.com/GabrielMurry/Spray' className='text-white bg-[#185533] dark:bg-[#298050] font-semibold px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'> 
                Code
            </a>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Overview
            </h2>
            <p className='font-bold mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Stage: Pre-Release
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Easily build, share, and track boulders on a spray wall.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View and filter through other user published boulders on a spray wall, switch between spray walls in a gym, or search for other gyms using Apple Maps with Google Geocoding API.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Over 35 API calls. Storing images in Amazon S3 bucket and retrieving its URL for database storage. 7 Django models: Gym, SprayWall, Person, Boulder, Circuit, Like Send, Bookmark, Activity. Using Django sessions. Retrieving CSRF tokens from my Django server. Utilizing Django rest_framework. Python Imaging Library to manipulate image data - grayscale image except for the painted portions. Using a relational database management system (PostgreSQL) to sort and find related data based on primary keys, such as certain boulders in a particular spray wall, displaying user data, user boulder statistics, etc. CRUD operations in all areas of data posting - boulder creations, custom profile editing, gym and spray wall editing, circuits, etc.
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Features
            </h2>
            <div className='flex justify-center'>
                <ul className='list-disc w-[90%]'> 
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Secure authentication with Django sessions and CSRF tokens
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Search for your gym or home wall via Apple Maps and Google geocoder API
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Add a new gym or home wall - edit the name, type, and location
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Add new spray walls to that gym - edit each spray wall's name and default image
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Home screen with a clean UI/UX that immediately displays the gym's name, spray walls, and a list of all published boulders in that spray wall
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Filter between spray walls in that gym or filter boulders through categorical filters or text inputs for specificity
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Add new boulder - options to use the default spray wall image, camera, or upload an image
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Edit and paint the boulder using your chosen image - green paint: starting hand holds, purple paint: foot holds, blue paint: hand and foot holds, red paint: finishing hold
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Can zoom and paint small holds whilst editing the boulder
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Using Python Imaging Library to manipulate the image by gray-scaling the entire image except for painted holds - leave the painted holds the color they are
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Storing all images in an Amazon S3 bucket and receiving the url to that image to send to the frontend and store in PostgreSQL database
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Add a boulder name, description, and more to your newly created boulder
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Publish or leave your boulder as a draft
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View any boulder - its name, grade, rating, image, setter name, date created, description, etc.
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View the boulder image as a full screen with zoom and pan capabilities
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Optimistic updating when liking or bookmarking the boulder
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Log a repeated or first time ascent of a boulder - adding the number of attempts, grade and rating suggestion
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View statistics of that boulder - how many people have climbed the boulder, distribution graph of all suggested grades from users, and more
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View your statistics on that particular boulder - date ascended, suggested, grade, and number of attempts
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Add the boulder to your circuits
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Add a new circuit to your circuit list and place any boulders in that circuit (that exist on that spray wall)
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Activity screen that displays and time stamps your significant activities - publishing a new boulder, ascending a boulder, repeating an ascent of a boulder, liking a boulder, bookmarking a boulder, adding a boulder to a circuit, and creating a new boulder
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Activity list are paginated to improve performance
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Profile screen that beautifully displays username profile image, current gym, current spray wall, categorical boulder data, statistics, and circuits
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Can freely change spray walls in your gym through the profile screen which changes all your boulder info (boulder info tied to each spray wall)
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View all your logged boulders that displays a graph of quantity of boulders climbed at each grade difficulty, and a section list of all boulders logged in a particular spray wall for each session (day)
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View liked, bookmarked, and created boulders for a particular spray wall
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        View all the boulders in particular circuits you custom made
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Edit profile by changing your profile image, editing your nick name, username, email, signing out, or deleting your profile
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        When changing your profile image, you can crop the image in aspect ratio 1:1, whilst also zooming and panning to desired region of the image
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Switch to a different gym in your profile that which you have shown activity in previously
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
        <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Backend Functionality
            </h2>
            <div className='flex justify-center'>
                <ul className='list-disc w-[90%]'> 
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Django as a backend utilizing its model-template-view architectural pattern as well as Django's rest_framework
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        7 Django models: Gym, SprayWall, Person, Boulder, Circuit, Like Send, Bookmark, and Activity
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Amazon S3 bucket for storing all images and using boto3 SDK for Python to retrieve those image urls for frontend use or storing in the database
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        PostgreSQL as a relational database management system to sort and find related data based on primary keys, such as certain boulders in a particular spray wall, displaying user data, user boulder statistics, etc.
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Over 35 API calls
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        CRUD operations in all areas of data posting - boulder creations, custom profile editing, gym and spray wall editing, circuits, etc.
                    </li>
                    <li className='cursor-text mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                        Organized code via categorized views, utils, helper functions, common functions, and common imports
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Wire Frames (Figma)
            </h2>
        </div>
        <div className='mt-3 lg:mt-5 xl:mt-7 w-full'>
            <Image priority src='/images/climbersEye/TEST_2.svg' alt='wordle' width={2000} height={850} />
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 flex flex-col items-center'>
            <div className='w-full md:w-[50%] h-full space-y-8'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Screens
                </h2>
                <div className='space-y-5'>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/climbersEye/CE_1.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_2.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_3.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_4.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_5.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_6.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_7.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_8.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_9.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_10.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_11.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_12.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_13.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_14.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_15.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_16.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_17.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_18.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_19.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_20.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_21.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_22.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_23.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_24.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_25.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_26.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_27.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_28.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_29.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_30.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_31.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_32.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_33.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_34.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_35.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_36.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_37.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_38.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_39.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_40.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_41.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_42.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_43.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_44.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex justify-evenly'>
                        <Image priority src='/images/climbersEye/CE_45.png' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/climbersEye/CE_46.png' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div> 
                </div>
            </div>
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
        <Link href={'/wordle'} className='text-white bg-[#185533] dark:bg-[#298050] px-8 py-5 rounded-full text-center mt-20 lg:mt-24 xl:mt-28 text-[1.9rem] md:text-[3rem] lg:text-[4rem] font-extrabold transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
            Wordle
        </Link>
    </div>
  )
}

export default wordleNew