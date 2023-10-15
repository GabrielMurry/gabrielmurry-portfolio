import React from 'react'

const fun = () => {
  return (
    <div className='w-full h-full px-10 font-nunitoSans flex flex-col items-center bg-gradient-radial dark:bg-gradient-radial-dark animate-gradient-x'>
      <div className='w-full h-[20rem] bg-red-50 flex flex-col justify-end items-center'>
          <h1 className='text-[#185533] dark:text-[#185533] mb-8 font-extrabold text-[3.3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]'>
              Fun
          </h1>
      </div>
      <div className='w-full h-full bg-red-100 flex justify-center'>
        <h3>
          An assortment of projects unrelated to code.
        </h3>
      </div>
    </div>
  )
}

export default fun