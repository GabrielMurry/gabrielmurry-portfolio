import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import contactImage from '../../public/assets/contact.jpg';

const Contact = () => {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name,
            phoneNumber,
            email,
            subject,
            message,
            submitted
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setPhoneNumber('')
                setEmail('')
                setSubject('')
                setMessage('')
            }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setSubmitted(false)
        }, 5000)
    }, [submitted])

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5394f6]'>
                Contact
            </p>
            <h2 className='py-4'>
                Get In Touch
            </h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src={contactImage} alt='/' className='rounded-xl hover:scale-105 ease-in duration-300' />
                        </div>
                        <div>
                            <h2 className='py-2'>
                                Gabriel Murry
                            </h2>
                            <p>
                                Software Engineer
                            </p>
                            <p className='py-4'>
                                Reach out and let&apos;s chat!
                            </p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>
                                Connect with me
                            </p>
                            <div className='flex items-center justify-between py-4'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/gabrielmurry">
                                        <FaLinkedinIn />
                                    </a>    
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="https://github.com/GabrielMurry">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail onClick={() => router.push('mailto:gabrielmurry.work@gmail.com')} />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="/assets/resume.pdf" >
                                        <BsFillPersonLinesFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form onSubmit={(e) => {handleSubmit(e)}}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Name
                                    </label>
                                    <input type="text" required onChange={(e) => {setName(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Phone Number
                                    </label>
                                    <input type="text" onChange={(e) => {setPhoneNumber(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                        Email
                                </label>
                                <input type="email" required onChange={(e) => {setEmail(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                        Subject
                                </label>
                                <input type="text" onChange={(e) => {setSubject(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                        Message
                                </label>
                                <textarea required onChange={(e) => {setMessage(e.target.value)}} className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                            </div>
                            {submitted 
                                ? 
                                <div className='flex justify-center w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#53b54e] to-[#83e77e]'>
                                    Sent!
                                </div>
                                : 
                                <button className='w-full p-4 text-gray-100 mt-4 hover:ring'>
                                    Send Message
                                </button> 
                            }
                        </form>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5394f6]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact