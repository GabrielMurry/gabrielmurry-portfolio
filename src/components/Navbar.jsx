import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import navLogo from '../../public/assets/navLogo.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsMoonStarsFill, BsMoonStars} from 'react-icons/bs'
import {useRouter} from 'next/router'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBG, setNavBG] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (
      router.asPath === '/wordle' ||
      router.asPath === '/chess' ||
      router.asPath === '/mapRouter' ||
      router.asPath === '/sudokuSolver'
    ) {
      setNavBG('transparent')
      setLinkColor('#ecf0f3')
    }
    else if (currentTheme === 'dark') {
      setNavBG('#0e0a19')
      setLinkColor('#ecf0f3')
    }
    else if (currentTheme === 'light') {
      setNavBG('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router, theme, systemTheme])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNav = () => {
    setNav(prevState => !prevState)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }
      else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
          <BsMoonStarsFill size={20} style={{color: "white"}} onClick={() => setTheme('light')} className='cursor-pointer' />
      )
    }
    else {
      return (
          <BsMoonStars size={20} onClick={() => setTheme('dark')} className='cursor-pointer' />
      )
    }
  }

  return (
    <div style={{backgroundColor: `${navBG}`}} className={shadow && theme === 'dark' ? 'fixed w-full h-20 shadow-xl shadow-gray-100/5 z-[100]' : shadow ? 'fixed w-full h-20 shadow-xl z-[100]' :  'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <h2 style={{color: `${navBG === 'transparent' ? 'white' : ''}`}} className='font-yellowtail' >
            Portfolio
          </h2>
        </Link>
        <div style={{color: `${navBG === 'transparent' ? 'white' : ''}`}} className='w-full ml-10'>
            {renderThemeChanger()}
        </div>
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-8 text-sm uppercase'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-8 text-sm uppercase'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-8 text-sm uppercase'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-8 text-sm uppercase'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-8 text-sm uppercase'>
                Contact
              </li>
            </Link>
            <li className='ml-8 text-sm uppercase'>
              <a href="/assets/resume.pdf" className='bg-[#5394f6] p-2 text-gray-100 rounded-md'>
                Resume
              </a>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Overlay */}
      <div 
        className={
          nav 
            ? 'md:hidden fixed left-0 top-0 w-full h-screen transition duration-300 ease-in bg-black/80' 
            : ''
        }
      >
        {/* Click dark empty space left of side drawer menu and it closes menu */}
        {nav && <div className='left-0 top-0 w-[50%] h-screen' onClick={handleNav}></div>}
        {/* Side drawer menu */}
        <div 
          className={
            nav && theme === 'dark'
              ? 'fixed left-[50%] top-0 w-[50%] p-10 h-screen dark:bg-[#0e0a19] ease-in duration-300' 
              : nav 
              ? 'fixed left-[50%] top-0 w-[50%] p-10 h-screen bg-[#ecf0f3] ease-in duration-300'
              : 'fixed left-[100%] top-0 w-[100%] p-10 ease-in duration-300'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2 style={{color: `${navBG === 'transparent' ? 'white' : ''}`}} className='font-yellowtail' >
                Portfolio
              </h2>
              <div onClick={handleNav} className='sm:visible invisible rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            {/* line underneath side drawer menu portfolio title and close button */}
            <div className='border-b border-gray-300 my-6'></div>
          </div>
          <div className='py-4 flex flex-col text-center mt-[25%]'>
            <ul className='uppercase font-bold'>
              <Link href='/' >
                <li onClick={() =>setNav(false)} className='py-4 sm:text-md'>
                  About
                </li>
              </Link>
              <Link href='/#skills' >
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects' >
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact' >
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Contact
                </li>
              </Link>
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                <a href="/assets/resume.pdf" className='bg-[#5394f6] p-2 text-gray-100 rounded-md'>
                  Resume
                </a>
                </li>
            </ul>
            <div className='pt-[3rem]'>
              <p className='uppercase tracking-widest text-[#5394f6] font-bold'>
                Let&apos;s Connect
              </p>
              <div className='my-4 w-full'>
                <div className='flex gap-5 my-5 justify-center'>
                  <div className='rounded-full shadow-lg shadow-gray-400 sm:p-8 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href="https://www.linkedin.com/in/gabrielmurry">
                        <FaLinkedinIn />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 sm:p-8 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href="https://github.com/GabrielMurry">
                        <FaGithub />
                    </a>
                  </div>
                </div>
                <div className='flex gap-5 justify-center'>
                  <div className='rounded-full shadow-lg shadow-gray-400 sm:p-8 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <AiOutlineMail onClick={() => router.push('mailto:gabrielmurry.work@gmail.com')} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 sm:p-8 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar