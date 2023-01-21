import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wordleImage from '../../public/assets/projects/wordle.jpg'
import chessImage from '../../public/assets/projects/chess.jpg'
import mapRouterImage from '../../public/assets/projects/mapRouter.jpg'
import sudokuSolverImage from '../../public/assets/projects/sudokuSolver.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl traciing-widest uppercase text-[#5394f6]'>
                Projects
            </p>
            <h2 className='py-4'>
                Past Projects
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title='Wordle Clone' 
                    backgroundImage={wordleImage} 
                    techUsed='M.E.R.N. Stack'
                    projectUrl='/wordle' 
                />
                <ProjectItem 
                    title='Chess AI' 
                    backgroundImage={chessImage} 
                    techUsed='JavaScript'
                    projectUrl='/chess' 
                />
                <ProjectItem 
                    title='Map Router' 
                    backgroundImage={mapRouterImage} 
                    techUsed='React JS'
                    projectUrl='/mapRouter' 
                />
                <ProjectItem 
                    title='Sudoku Solver' 
                    backgroundImage={sudokuSolverImage} 
                    techUsed='JavaScript / CSS / HTML'
                    projectUrl='/sudokuSolver' 
                />

            </div>
        </div>
    </div>
  )
}

export default Projects