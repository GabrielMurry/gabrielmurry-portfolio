import React, { useEffect } from 'react'
import Image from 'next/image'
import htmlImage from '../../public/assets/skills/html.png'
import cssImage from '../../public/assets/skills/css.png'
import javascriptImage from '../../public/assets/skills/javascript.png'
import reactImage from '../../public/assets/skills/react.png'
import tailwindImage from '../../public/assets/skills/tailwind.png'
import cplusplusImage from '../../public/assets/skills/c++.png'
import pythonImage from '../../public/assets/skills/python.png'
import nodeImage from '../../public/assets/skills/node.png'
import githubImage from '../../public/assets/skills/github1.png'
import mongodbImage from '../../public/assets/skills/mongo.png'
import nextjsImage from '../../public/assets/skills/nextjs.png'
import rImage from '../../public/assets/skills/r.png'
import graphqlImage from '../../public/assets/skills/graphql.png'
import apolloImage from '../../public/assets/skills/apollo.png'
import bootstrapImage from '../../public/assets/skills/bootstrap.png'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from "react-redux";
import { inViewTrue, inViewFalse } from "../slices/inViewSlice";


function Skills() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (inView) {
        dispatch(inViewTrue('Skills'))
    }
    else {
        dispatch(inViewFalse('Skills'))
    }
  }, [inView])


  return (
    <div id='skills' ref={ref} className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5394f6]'>
                Skills
            </p>
            <h2 className='py-4'>
                What I Can Do
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={htmlImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                HTML
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cssImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                CSS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascriptImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                JavaScript
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={reactImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                React
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwindImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Tailwind
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cplusplusImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                C++
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={pythonImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Python
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nodeImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Node
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={githubImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Github
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongodbImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                MongoDB
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjsImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Next
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={rImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                R
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={graphqlImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                GraphQL
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={apolloImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Apollo
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#e7eef4] dark:shadow-gray-100/30 bg-[#ecf0f3]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={bootstrapImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='dark:text-black'>
                                Bootstrap
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills