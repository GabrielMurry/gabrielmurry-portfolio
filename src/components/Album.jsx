import Image from 'next/image'
import React from 'react'

const Album = ({ image, name, artist }) => {
  return (
    <div className='bg-[#185533] dark:bg-[#298050] group rounded-xl w-full p-3 flex justify-center items-center'>
        <Image priority src={`/images/${image}AlbumCover.png`} alt={name} width="0" height="0" sizes="100vw" className='w-full h-auto transition ease-in-out group-hover:opacity-40 duration-500' />
        <div className='w-[20%] sm:w-[25%] md:w-[12%] absolute text-center opacity-0 transition ease-in-out group-hover:opacity-100 duration-500'>
            <p className='text-white font-bold text-[11px] sm:text-[13px] lg:text-[16px]'>
                {name}
            </p>
            <p className='text-white text-[10px] sm:text-[12px] lg:text-[15px]'>
                {artist}
            </p>
        </div>
    </div>
  )
}

export default Album