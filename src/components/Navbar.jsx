import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsMoonStarsFill, BsMoonStars} from 'react-icons/bs'
import {useRouter} from 'next/router'
import { useTheme } from 'next-themes'
import ContactModal from './ContactModal'
import useMountTransition from '@/hooks/useMountTransition'

function Navbar() {
  const router = useRouter()
  const { systemTheme, theme, setTheme } = useTheme()

  const [navBG, setNavBG] = useState('transparent')
  const [navRouteBG, setNavRouteBG] = useState('')

  const [isContactModalMounted, setIsContactModalMounted] = useState(false)
  // mainly used to add transition to contact modal when unmounted (and also adds transition on mount)
  const hasTransitionedIn = useMountTransition(isContactModalMounted, 300)

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (navBG !== 'transparent') {
      setNavBG(currentTheme === 'light' ? 'rgb(255, 255, 255, .6)' : 'rgb(0, 0, 0, .6)')
    }

    setNavRouteBG(currentTheme === 'light' ? 'rgb(255, 255, 255, .8' : 'rgb(220, 220, 220, .2')

    const handleNavBG = () => {
      if (window.scrollY >= 80) {
        setNavBG(currentTheme === 'light' ? 'rgb(255, 255, 255, .6)' : 'rgb(0, 0, 0, .6)')
      }
      else {
        setNavBG('transparent')
      }
    }
    window.addEventListener('scroll', handleNavBG)

    return () => {
      window.removeEventListener('scroll', handleNavBG)
    }
  }, [systemTheme, theme])

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
          <BsMoonStarsFill style={{color: "white"}} onClick={() => setTheme('light')} className='cursor-pointer text-sm md:text-lg' />
      )
    }
    
    return (
        <BsMoonStars onClick={() => setTheme('dark')} className='cursor-pointer text-sm md:text-lg' />
    )
  }

  return (
    <div className='fixed w-screen h-24 z-[100] flex justify-center items-center'>
      <div style={{backgroundColor: `${navBG}`}} className='flex justify-center items-center w-[18rem] md:w-[25rem] h-[60%] rounded-full ease-in-out duration-300 backdrop-blur-lg'>
          <ul className='flex justify-evenly items-center w-full text-gray-600 dark:text-gray-300 font-lato text-[12px] md:text-base'>
            <li style={router.asPath === '/' || router.asPath ==='/wordle' || router.asPath ==='/projectManager' || router.asPath ==='/chess' || router.asPath ==='/mapRouter' || router.asPath ==='/sudokuSolver' ? {backgroundColor: navRouteBG} : {backgroundColor: ''}} className='px-3 md:px-5 py-2 rounded-full flex justify-center items-center'>
              <Link href='/'>
                  Projects
              </Link>
            </li>
            <li style={router.asPath === '/about' && theme === 'light' ? {backgroundColor: 'rgb(255, 255, 255, .8'} : router.asPath === '/about' && theme === 'dark' ? {backgroundColor: 'rgb(220, 220, 220, .2'} : {backgroundColor: ''}} className='px-3 md:px-5 py-2 rounded-full flex justify-center items-center'>
              <Link href='/about'>
                  About
              </Link>
            </li>
            {/* <li style={router.asPath === '/fun' && theme === 'light' ? {backgroundColor: 'rgb(255, 255, 255, .8'} : router.asPath === '/fun' && theme === 'dark' ? {backgroundColor: 'rgb(220, 220, 220, .2'} : {backgroundColor: ''}} className='px-3 md:px-5 py-2 rounded-full flex justify-center items-center'>
              <Link href='/fun'>
                  Fun
              </Link>
            </li> */}
            <li onClick={() => setIsContactModalMounted(true)} className='px-3 md:px-5 py-2 rounded-full flex justify-center items-center'>
                Contact
            </li>
            <li className='pr-3 pl-1 md:pr-5 py-2 rounded-full flex justify-center items-center'>
                {renderThemeChanger()}
            </li>
          </ul>
      </div>
      {(hasTransitionedIn || isContactModalMounted) && (
        // mount and unmount transition opacity and backdrop blur styling in globals.css file
        <div className={`contactModal ${hasTransitionedIn && isContactModalMounted && 'isVisible'}`}>
          <ContactModal onClose={() => setIsContactModalMounted(false)} />
        </div>
      )}
    </div>
  )
}

export default Navbar