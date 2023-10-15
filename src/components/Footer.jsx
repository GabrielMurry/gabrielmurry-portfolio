import Image from 'next/image'
import React from 'react'
import spotifyLogo from '../../public/assets/spotify.png'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()

  return (
    <div className='w-full h-[75vh] flex items-center font-lato'>
        <div className='w-full h-1/2 flex justify-center'>
            <div className='w-[20rem] h-full sm:w-3/4 sm:flex'>
                <div className='w-full h-[40%] sm:h-[75%] sm:flex sm:flex-col-reverse sm:justify-end sm:items-center'>
                    <a href='https://open.spotify.com/track/15ea10YpJIl3mJq75yzqsD' target="_blank" className='bg-[#a5e2a5] dark:bg-[#185533] w-full lg:w-[25rem] h-[3.5rem] sm:h-[4rem] rounded-full flex justify-start items-center p-2 sm:p-3'>
                        <Image src={spotifyLogo} alt='/' className='w-[2.5rem] h-full' />
                        <div className='w-full h-full flex flex-col justify-center px-3'>
                            <div>
                                <p className='text-[10px] sm:text-xs lg:text-sm'>
                                    On Repeat
                                </p>
                            </div>
                            <div>
                                <p className='text-[12px] sm:text-sm lg:text-base'>
                                    Jigsaw Falling Into Place by Radiohead
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className='w-full h-[60%] sm:h-1/2 flex justify-center items-center sm:items-start'>
                        <h2 className='text-[#185533]'>
                            Let's Connect
                        </h2>
                    </div>
                </div>
                <div className='w-full h-[60%] sm:h-full'>
                    <div className='w-full h-[90%] flex p-3'>
                        <div className='w-1/2 h-full flex justify-center'>
                            <div>
                                <h6 className='font-extrabold text-[#185533]'>
                                    Elsewhere
                                </h6>
                                <ul>
                                    <li className='mt-4'>
                                        <a href="https://github.com/GabrielMurry">
                                            Github
                                        </a>
                                    </li>
                                    <li className='mt-4'>
                                        <a href="https://www.linkedin.com/in/gabrielmurry">
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-center'>
                            <div>
                                <h6 className='font-extrabold text-[#185533]'>
                                    Contact
                                </h6>
                                <ul>
                                    <li className='mt-4' onClick={() => router.push('mailto:gabrielmurry.work@gmail.com')}>
                                        Email
                                    </li>
                                    <li className='mt-4'>
                                        <a href="/assets/resume.pdf" >
                                            Resume
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10%] flex justify-center items-center'>
                        <p>
                            © 2023 Gabriel Murry
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer