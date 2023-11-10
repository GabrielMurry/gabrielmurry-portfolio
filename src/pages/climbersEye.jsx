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
                    React Native &#x2022; Django &#x2022; PostgreSQL &#x2022; Amazon S3 &#x2022; AWS RDS &#x2022; Heroku &#x2022; App Store Connect
                </p>
            </div>
        </div>
        <div>
            <Image priority src='/images/climbers-eye-icon-big.png' alt='climbers eye logo' width={800} height={100} className='' />
        </div>
        <div className='w-full h-full mt-12 flex justify-evenly lg:mt-16 xl:mt-20 md:w-[50%] '>
            <a href='https://wordle-mern.onrender.com/' className='text-white bg-[#185533] opacity-25 dark:bg-[#298050] font-semibold px-5 rounded-full text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px] transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
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
            <p className='font-bold mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Wire frames and app images below
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                An app for rock climbers by a rock climber.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Easily build, edit, share, and track boulders on a spray wall.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View and filter through other user published boulders on a spray wall, switch between spray walls in a gym, or search for other gyms.
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Features
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Secure authentication with Django sessions and CSRF tokens.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Search for your gym or home wall via Apple Maps and Google geocoder API.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add a new gym or home wall - edit the name, type, and location.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add new spray walls to that gym - edit each spray wall's name and default image.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Home screen with a clean UI/UX that immediately displays the gym's name, spray walls, and a list of all published boulders in that spray wall.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Filter between spray walls in that gym or filter boulders through categorical filters or text inputs for specificity.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add new boulder - options to use the default spray wall image, camera, or upload an image.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Edit and paint the boulder using your chosen image - green paint: starting hand holds, purple paint: foot holds, blue paint: hand and foot holds, red paint: finishing hold.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Can zoom and paint small holds whilst editing the boulder.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Using Python Imaging Library to manipulate the image by gray-scaling the entire image except for painted holds - leave the painted holds the color they are.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Storing all images in an Amazon S3 bucket and receiving the url to that image to send to the frontend and store in PostgreSQL database.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add a boulder name, description, and more to your newly created boulder.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Publish or leave your boulder as a draft.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View any boulder - its name, grade, rating, image, setter name, date created, description, etc.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View the boulder image as a full screen with zoom and pan capabilities.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Optimistic updating when liking or bookmarking the boulder.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Log a repeated or first time ascent of a boulder - adding the number of attempts, grade and rating suggestion.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View overall statistics of that boulder - how many people have climbed the boulder, distribution graph of all suggested grades from users, and more.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View your personal statistics on that particular boulder - date ascended, suggested, grade, and number of attempts.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add the boulder to your circuits.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Add a new circuit to your circuit list and place any boulders in that circuit (that exist on that spray wall).
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Activity screen that displays and time stamps your significant activities - publishing a new boulder, ascending a boulder, repeating an ascent of a boulder, liking a boulder, bookmarking a boulder, adding a boulder to a circuit, and creating a new boulder.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Activity list are paginated to improve performance.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Profile screen that beautifully displays username profile image, current gym, current spray wall, categorical boulder data, statistics, and circuits.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Can freely change spray walls in your gym through the profile screen which changes all your boulder info (boulder info tied to each spray wall).
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View all your logged boulders that displays a graph of quantity of boulders climbed at each grade difficulty, and a section list of all boulders logged in a particular spray wall for each session (day).
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View liked, bookmarked, and created boulders for a particular spray wall.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View all the boulders in particular circuits you custom made.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Edit profile by changing your profile image, editing your nick name, username, email, signing out, or deleting your profile.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                When changing your profile image, you can crop the image in aspect ratio 1:1, whilst also zooming and panning to desired region of the image.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Switch to a different gym in your profile that which you have shown activity in previously.
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Backend Functionality
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Django as a backend utilizing its model-template-view architectural pattern as well as Django's rest_framework.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                7 Django models: Gym, SprayWall, Person, Boulder, Circuit, Like Send, Bookmark, and Activity.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Amazon S3 bucket for storing all images and using boto3 SDK for Python to retrieve those image urls for frontend use or storing in the database.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                PostgreSQL as a relational database management system to sort and find related data based on primary keys, such as certain boulders in a particular spray wall, displaying user data, user boulder statistics, etc..
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Over 35 API calls.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                CRUD operations in all areas of data posting - boulder creations, custom profile editing, gym and spray wall editing, circuits, etc.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Organized code via categorized views, utils, helper functions, common functions, and common imports.
            </p>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Wire Frames (Figma)
            </h2>
        </div>
        <div className='mt-3 lg:mt-5 xl:mt-7 w-full'>
            <Image priority src='/images/wireFrames.png' alt='wordle' width={2000} height={850} />
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 flex flex-col items-center'>
            <div className='w-full md:w-[50%] h-full space-y-8'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Screens
                </h2>
                <div className='space-y-5'>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_1.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_2.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_3.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_4.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_5.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_6.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_7.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_10.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_11.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_9.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_13.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_14.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_15.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_16.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_17.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_18.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_19.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_20.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_21.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_22.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_23.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_24.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_25.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_26.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_27.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_28.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_29.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_30.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_31.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_32.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_33.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_34.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_35.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_36.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_37.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_38.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_39.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_40.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_41.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_42.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_43.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_44.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div>
                    <div className='flex space-x-5'>
                        <Image priority src='/images/CE_45.PNG' alt='wordle mobile sign in' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                        <Image priority src='/images/CE_46.PNG' alt='wordle mobile' width={175} height={850} unoptimized className='lg:w-[17rem] xl:w-[20rem] rounded-[1.5rem] lg:rounded-[2.75rem] xl:rounded-[3.25rem] shadow-2xl' />
                    </div> 
                </div>
            </div>
        </div>
        <div className='w-full h-full mt-12 lg:mt-16 xl:mt-20 md:w-[50%]'>
            <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                Next Steps
            </h2>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px] '>
                Publish app to App Store and Google Play store.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Improve overall UI - consistent styling, fonts, and more.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View other profiles.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                View list of all ascents and notes for other users on each boulder.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                QR code on each physical spray wall for new users to easily navigate to the app and that particular gym / spray wall.
            </p>
            <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                Improve painting - incorporate object detection.
            </p>
        </div>
        <Link href={'/wordle'} className='text-white bg-[#185533] dark:bg-[#298050] px-8 py-5 rounded-full text-center mt-20 lg:mt-24 xl:mt-28 text-[1.9rem] md:text-[3rem] lg:text-[4rem] font-extrabold transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
            Wordle
        </Link>
    </div>
  )
}

export default wordleNew