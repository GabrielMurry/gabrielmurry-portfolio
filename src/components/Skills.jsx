import React from 'react'
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
import firebaseImage from '../../public/assets/skills/firebase.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Skills
            </p>
            <h2 className='py-4'>
                What I Can Do
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={htmlImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                HTML
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cssImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                CSS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascriptImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                JavaScript
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={reactImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                React
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwindImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                Tailwind
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cplusplusImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                C++
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={pythonImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                Python
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nodeImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                Node
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={githubImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                Github
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongodbImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                MongoDB
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={firebaseImage} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>
                                Firebase
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