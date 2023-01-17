import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wordleImage from '../../public/assets/projects/wordle.jpg'
import chessImage from '../../public/assets/projects/chess.jpg'
import netflixImage from '../../public/assets/projects/netflix.jpg'
import twitchImage from '../../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl traciing-widest uppercase text-[#5651e5]'>
                Projects
            </p>
            <h2 className='py-4'>
                Past Projects
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title='Wordle Clone' 
                    backgroundImage={wordleImage} 
                    techUsed='React JS'
                    projectUrl='/wordle' 
                />
                <ProjectItem 
                    title='Chess AI' 
                    backgroundImage={chessImage} 
                    techUsed='React JS'
                    projectUrl='/chess' 
                />
                <ProjectItem 
                    title='Netflix App' 
                    backgroundImage={netflixImage} 
                    techUsed='React JS'
                    projectUrl='/netflix' 
                />
                <ProjectItem 
                    title='Twitch App' 
                    backgroundImage={twitchImage} 
                    techUsed='React JS'
                    projectUrl='/twitch' 
                />

            </div>
        </div>
    </div>
  )
}

export default Projects