import React from 'react'
import Image from 'next/image'
import aboutImage from '../../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I am
                </h2>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis perferendis quasi vel assumenda veniam explicabo, accusantium nemo earum quaerat tempore dolorem velit facere architecto ratione, cum doloribus itaque consequatur.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, earum. Quaerat vel a laboriosam quo officiis, voluptates dolorum natus. Facilis quis eveniet ipsa eligendi eius porro aliquam nam nemo ipsum.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my projects. 
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={aboutImage} alt="/" className='rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default About