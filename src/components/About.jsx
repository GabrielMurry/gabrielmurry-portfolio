// import Image from 'next/image'
// import gabrielImage from '../../public/assets/gabriel.jpg'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from "react-redux";
import { inViewTrue, inViewFalse } from "../slices/inViewSlice";
import { useEffect } from 'react';

const About = () => {
    const { ref, inView } = useInView({ threshold: 0.5 })
    const dispatch = useDispatch();
    
    useEffect(() => {
      if (inView) {
          dispatch(inViewTrue('About'))
      }
      else {
          dispatch(inViewFalse('About'))
      }
    }, [inView])

  return (
    <div id='about' ref={ref} className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5394f6]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who Am I?
                </h2>
                <p className='py-2 text-gray-600 dark:text-gray-100'>
                    With a B.S.C. in Economics at Santa Clara University&apos;s Leavey School of Business, my strength lies in statistical and data analysis, but my passion lies in software development.
                </p>
                <p className='py-2 text-gray-600 dark:text-gray-100'>
                    My interest for programming sparked at SCU after excelling in several computer science classes, such as object oriented programming and data structures, all in the language of C++. I continued to challenge myself and expand my knowledge of software engineering by learning JavaScript, HTML, CSS, frameworks such as React.js, Next.js, Tailwind CSS, and Bootstrap CSS, backend and middleware such as Python, Node.js, and Express.js. Currently, I have been learning, implementing, and deploying projects on the MERN stack!
                </p>
                <p className='py-2 text-gray-600 dark:text-gray-100'>
                    In the past year, I was a TA for an upper-division advanced macroeconomics course, mentoring over 40 students, tutoring students in my office hours, coordinating and leading study sessions, and giving lectures to review important course material. For a year, I worked as a service desk assistant at two of SCU&apos;s residence halls, leading and coordinating community-focused events, as well as providing technical and other various services. In the summer of 2020, I interned as a sales and product designer boosting my communication and problem solving skills. I was also co-lighting designer and spot coordinator/leader for three years at a performing arts venue.
                </p>
                <p className='py-2 text-gray-600 dark:text-gray-100'>
                    When I&apos;m not programming, you can catch me on the wall rock climbing (inside and outside), quenching my thirst and passion for film, and eating at new and local restaurants!
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-[#ecf0f3]'>
                {/* <Image src={gabrielImage} alt="/" className='rounded-xl' /> */}
            </div>
        </div>
    </div>
  )
}

export default About