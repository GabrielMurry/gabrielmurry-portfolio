import Album from '@/components/Album'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const albumsArray = [
    {
        'image': 'tpab',
        'albumName': 'To Pimp a Butterfly',
        'artist': 'Kendrick Lamar'
    },
    {
        'image': 'inRainbows',
        'albumName': 'In Rainbows',
        'artist': 'Radiohead'
    },
    {
        'image': 'currents',
        'albumName': 'Currents',
        'artist': 'Tame Impala'
    },
    {
        'image': 'iCantLetGo',
        'albumName': "I Can't Let Go",
        'artist': 'Suki Waterhouse'
    },
    {
        'image': 'normanFuckingRoswell',
        'albumName': 'Norman Fucking Roswell',
        'artist': 'Lana Del Rey'
    },
    {
        'image': 'odyssey',
        'albumName': 'Odyssey',
        'artist': 'Home'
    },
    {
        'image': 'forEver',
        'albumName': 'For Ever',
        'artist': 'Jungle'
    },
    {
        'image': 'discovery',
        'albumName': 'Discovery',
        'artist': 'Daft Punk'
    },
    {
        'image': 'carrieAndLowell',
        'albumName': 'Carrie and Lowell',
        'artist': 'Sufjan Stevens'
    },
    {
        'image': 'channelOrange',
        'albumName': 'Channel Orange',
        'artist': 'Frank Ocean'
    },
    {
        'image': 'marchita',
        'albumName': 'Marchita',
        'artist': 'Silvana Estrada'
    },
    {
        'image': 'goodKidMaadCity',
        'albumName': 'good kit, m.A.A.d city',
        'artist': 'Kendrick Lamar'
    },
    {
        'image': 'slowRush',
        'albumName': 'Slow Rush',
        'artist': 'Tame Impala'
    },
    {
        'image': 'theLastOfUsPart2',
        'albumName': 'The Last of Us Part 2',
        'artist': 'Gustavo Santaolalla and Mac Quayle'
    },
    {
        'image': 'igor',
        'albumName': 'Igor',
        'artist': 'Tyler the Creator'
    },
    {
        'image': 'roomOnFire',
        'albumName': 'Room On Fire',
        'artist': 'The Strokes'
    },
    {
        'image': 'isThisIt',
        'albumName': 'Is This It',
        'artist': 'The Strokes'
    },
    {
        'image': 'aLoveSupreme',
        'albumName': 'A Love Supreme',
        'artist': 'John Coltrane'
    },
    {
        'image': 'pureHeroine',
        'albumName': 'Pure Heroine',
        'artist': 'Lorde'
    },
    {
        'image': 'blond',
        'albumName': 'Blond',
        'artist': 'Frank Ocean'
    },
    {
        'image': 'jubilee',
        'albumName': 'Jubilee',
        'artist': 'Japanese Breakfast'
    },
    {
        'image': 'theBlueNotebooks',
        'albumName': 'The Blue Notebooks',
        'artist': 'Max Richter'
    },

]

const about = () => {
    const [albumIndex, setAlbumIndex] = useState(0)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        Aos.init({ })
      }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setAlbumIndex(prev => prev + 1)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    // algo for infinite loop display of each album. Slice albumsArray at specified start and end, if start > end, means we are looping back through the start of array, so we concatenate two sliced segments of albumsArray
    useEffect(() => {
        // since we are displaying 3x3 grid, we initialize by slicing first 9 albums in array, then incremenet every 5 seconds
        const start = (0 + albumIndex) % albumsArray.length 
        const end = (9 + albumIndex) % albumsArray.length
        let arrMain
        if (start > end) {
            let arr1 = albumsArray.slice(start, albumsArray.length)
            let arr2 = albumsArray.slice(0, end)
            arrMain = arr1.concat(arr2)
        }
        else {
            arrMain = albumsArray.slice(start, end)
        }
        setAlbums(arrMain)
    }, [albumIndex])

    return (
        <div className='w-full h-full px-10 font-nunitoSans flex flex-col items-center bg-gradient-radial dark:bg-gradient-radial-dark animate-gradient-x'>
            <div className='w-full h-[15rem] md:h-[18.5rem] lg:h-[19.5rem] xl:h-[20.5rem] flex flex-col justify-end items-center'>
                <h1 data-aos='fade' data-aos-duration={700} className='text-[#185533] dark:text-[#8fdcc1] mb-8 font-extrabold text-[3.3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]'>
                    Who Am I?
                </h1>
            </div>
            <div className='w-full h-full md:h-[60vh] flex flex-col md:flex-row items-center'>
                <div data-aos='fade' data-aos-duration={500} data-aos-delay={200} className='w-full md:w-[40%] h-full flex justify-center items-center'>
                    <Image priority src='/images/gabrielImage.jpg' alt="gabriel photo" width="0" height="0" sizes="100vw" className='w-[15rem] md:w-[18rem] lg:w-[20rem] xl:w-[22rem] h-auto rounded-xl' />
                </div>
                <div className='w-full md:w-[60%] h-full mt-12 md:mt-0 md:p-10 flex justify-center items-center'>
                    <div className='w-full h-full'>
                        <h2 data-aos='fade' data-aos-duration={500} data-aos-delay={300} className='text-[#185533] leading-tight text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                            I'm Gabriel, a software engineer and recent graduate from Santa Clara Unversity.
                        </h2>
                        <p data-aos='fade' data-aos-duration={500} data-aos-delay={400} data-aos-offset={0} className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                            In December 2022, I graduated cum laude with a B.S.C. in Economics at Santa Clara University's Leavey School of Business, with an emphasis in data analytics. 
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-14 lg:mt-16 xl:mt-20 w-full md:w-[75%] lg:w-[60%] h-full flex flex-col'>
                <div className='bg-[#185533] dark:bg-[#298050] relative group w-full h-[5rem] rounded-full flex justify-center items-center transition-mb-smooth hover:mb-[18rem] duration-500'>
                    <div className='w-[85%] h-[60%] absolute z-10 flex justify-between items-center'>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                Santa Clara University
                            </h3>
                            <h3 className='text-gray-300 dark:text-gray-300 text-[12px] md:text-[14px] lg:text-[16px]'>
                                Teacher Assistant
                            </h3>
                        </div>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                0.7
                            </h3>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        {/* rect that scales vertically from center */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-[2px] relative inset-y-10 origin-top transition ease-in-out group-hover:scale-y-[145] duration-500' />
                        {/* rect rounded full (similar shape) but translates down vertically */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-full relative rounded-full transition ease-in-out group-hover:translate-y-[18rem] duration-500' />
                        {/* fade in rect of text */}
                        <div className='w-full h-full relative flex justify-center items-center px-5 inset-y-20 opacity-0 transition group-hover:delay-100 group-hover:opacity-100 group-hover:duration-500'>
                            <p className='text-white dark:text-gray-300 text-[14px] md:text-[16px] lg:text-[18px]'>
                                Currently mentoring over 40 students within two undergraduate advanced macroeconomics courses. Tutoring students in my scheduled office hours 4 times a week. Hosting two exam review sessions implementing in-depth lectures on all course material, answering questions, and breaking down complex concepts. Also creating two mock exams for student preparation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#185533] dark:bg-[#298050] mt-5 lg:mt-8 relative group w-full h-[5rem] rounded-full flex justify-center items-center transition-mb-smooth hover:mb-[18rem] duration-500'>
                    <div className='w-[85%] h-[60%] absolute z-10 flex justify-between items-center'>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                Santa Clara University
                            </h3>
                            <h3 className='text-gray-300 dark:text-gray-300 text-[12px] md:text-[14px] lg:text-[16px]'>
                                Service Desk Assistant
                            </h3>
                        </div>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                1
                            </h3>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        {/* rect that scales vertically from center */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-[2px] relative inset-y-10 origin-top transition ease-in-out group-hover:scale-y-[145] duration-500' />
                        {/* rect rounded full (similar shape) but translates down vertically */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-full relative rounded-full transition ease-in-out group-hover:translate-y-[18rem] duration-500' />
                        {/* fade in rect of text */}
                        <div className='w-full h-[6rem] relative flex justify-center items-center px-5 inset-y-20 opacity-0 transition group-hover:delay-100 group-hover:opacity-100 group-hover:duration-500'>
                            <p className='text-white dark:text-gray-300 text-[14px] md:text-[16px] lg:text-[18px]'>
                                For a year, I worked as a service desk assistant at two of SCU's upperclass residence halls. I coordinated and lead 6 community-focused events over the year, achieving greater social interaction and a feeling of belonging within the community. I also provided technical and emergency support upon many appropriate situations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#185533] dark:bg-[#298050] mt-5 lg:mt-8 relative group w-full h-[5rem] rounded-full flex justify-center items-center transition-mb-smooth hover:mb-[18rem] duration-500'>
                    <div className='w-[85%] h-[60%] absolute z-10 flex justify-between items-center'>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                ADM Sneezeguards
                            </h3>
                            <h3 className='text-gray-300 dark:text-gray-300 text-[12px] md:text-[14px] lg:text-[16px]'>
                                Sales and Product Design
                            </h3>
                        </div>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                0.3
                            </h3>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        {/* rect that scales vertically from center */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-[2px] relative inset-y-10 origin-top transition ease-in-out group-hover:scale-y-[145] duration-500' />
                        {/* rect rounded full (similar shape) but translates down vertically */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-full relative rounded-full transition ease-in-out group-hover:translate-y-[18rem] duration-500' />
                        {/* fade in rect of text */}
                        <div className='w-full h-[6rem] relative flex justify-center items-center px-5 inset-y-20 opacity-0 transition group-hover:delay-100 group-hover:opacity-100 group-hover:duration-500'>
                            <p className='text-white dark:text-gray-300 text-[14px] md:text-[16px] lg:text-[18px]'>
                                Over the summer, I interned as a sales and product designer boosting my communication and problem solving skills. Designed and customized around 25% of installation orders in CAD, communicating the process and details to the client. Performed follow-ups to previous clients to ensure satisfaction, and listen and respond to any concerns the client may have.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#185533] dark:bg-[#298050] mt-5 lg:mt-8 relative group w-full h-[5rem] rounded-full flex justify-center items-center transition-mb-smooth hover:mb-[18rem] duration-500'>
                    <div className='w-[85%] h-[60%] absolute z-10 flex justify-between items-center'>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                Harris Center
                            </h3>
                            <h3 className='text-gray-300 dark:text-gray-300 text-[12px] md:text-[14px] lg:text-[16px]'>
                                Co-Lighting Designer / Spot Coordinator
                            </h3>
                        </div>
                        <div>
                            <h3 className='text-white dark:text-gray-300 text-[16px] md:text-[18px] lg:text-[20px]'>
                                5
                            </h3>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        {/* rect that scales vertically from center */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-[2px] relative inset-y-10 origin-top transition ease-in-out group-hover:scale-y-[145] duration-500' />
                        {/* rect rounded full (similar shape) but translates down vertically */}
                        <div className='bg-[#185533] dark:bg-[#298050] w-full h-full relative rounded-full transition ease-in-out group-hover:translate-y-[18rem] duration-500' />
                        {/* fade in rect of text */}
                        <div className='w-full h-[6rem] relative flex justify-center items-center px-5 inset-y-20 opacity-0 transition group-hover:delay-100 group-hover:opacity-100 group-hover:duration-500'>
                            <p className='text-white dark:text-gray-300 text-[14px] md:text-[16px] lg:text-[18px]'>
                                I was co-lighting designer, spot coordinator and leader, and technician for 5 years at the Harris Center of the Performing Arts. Directed a lighting team to assist with technical preparation and design of stage lights for 4 live shows. Influenced creative ideas on how each scene should be lit with the director. I also organized team meetings to discuss roles and responsibilities, relayed critical information from the director and lighting designers to my team, and fostered a healthy work environment with my team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* rounded outline not working in safari - must use rounded ring :( */}
            <div className='mt-24 lg:mt-28 xl:mt-32 w-full md:w-[50%] h-full p-3 ring-4 ring-[#185533] dark:ring-[#8fdcc1] rounded-3xl'>
                <h2 className='text-[#185533] leading-tight text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Committed to Equity, Equal Rights, Sustainability, and Inclusivity. 
                </h2>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    Everyone deserves rights. Our differences define our humanity, and should be recognized and celebrated. My goal is to contribute and push for accessibility and inclusivity throughout all sections of my life. 
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    I also believe in a sustainable lifestyle. We share our space on Earth, and therefore should respect the space given to us. My priority is to leave this planet better than before, providing a better outcome to our future generations.
                </p>
            </div>
            <div className='mt-12 lg:mt-16 xl:mt-20 w-full md:w-[50%] h-full'>
                <h2 className='text-[#185533] leading-tight text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Why Software Engineering?
                </h2>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    My passion for software engineering sparked at SCU after excelling in several computer science classes, including object-oriented programming and data structures, both taught in C++. During and soon after these classes, I was tutoring friends and students in intro CS classes and data structures. 
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    I continued to explore other avenues in code, such as JavaScript, HTML, CSS, and frameworks such as React JS and Next JS. Spending my free time learning these frontend frameworks, UI, and accessible design, evolved my interest, challenging me to understand how these fit into the broader whole of web development.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    I had to learn backend to fulfill this desire, building fullstack applications with Node JS, Express JS, and Python. Implementing the MERN stack and learning how to deploy the frontend and backend server has been my current interest.
                </p>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    For future projects, I plan to callback to my roots and build a project with C++ on the backend.
                </p>
            </div>
            <div className='relative mt-12 lg:mt-16 xl:mt-20 w-full md:w-[50%] grid grid-cols-3 gap-2'>
                {albums.map((album) => {
                    return <Album image={album.image} name={album.albumName} artist={album.artist} />
                })}
            </div>
            <div className='mt-12 lg:mt-16 xl:mt-20 w-full md:w-[50%] h-full'>
                <h2 className='text-[#185533] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[55px]'>
                    Life Outside
                </h2>
                <p className='mt-3 lg:mt-5 xl:mt-7 text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]'>
                    When I'm not working, you can catch me on the rock wall climbing V8 with some friends, at the movie theater watching every new release, listening to an album front-to-back whilst running, walking my cats outside, or traveling up and down California.
                </p>
            </div>
        </div>
    )
}

export default about