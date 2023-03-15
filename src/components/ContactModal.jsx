import React, { useEffect, useState } from 'react'
import { FaStar, FaTimes } from 'react-icons/fa'
import BarLoader from "react-spinners/BarLoader";

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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')

const ContactModal = ({ onClose }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({ name: false, email: { blank: false, invalid: false }, message: false })
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleClose = (e) => {
        e.preventDefault()
        if (e.target.id === 'wrapper') {
            onClose()
        }
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault()
        // check if required input fields are blank (form input field built-in properties not working). And check if the email is valid
        if (!name || !email || !message || !/^[a-zA-Z0-9]+\.?(?:[a-zA-Z0-9])+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
            if (!name) {
                setErrors(prev => ({ ...prev, name: true }))
            }
            if (!email) {
                setErrors(prev => ({ ...prev, email: { blank: true } }))
            }
            // regex test check to see if email is valid (gabrielmurry@gmail.com), AND allows multiple periods in domain (gabrielmurry.test@gmail.com)
            else if (!/^[a-zA-Z0-9]+\.?(?:[a-zA-Z0-9])+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
                setErrors(prev => ({ ...prev, email: { invalid: true } }))
            }
            if (!message) {
                setErrors(prev => ({ ...prev, message: true }))
            }
            return
        }
        console.log('Sending')
        setIsLoading(true)

        let data = {
            name,
            email,
            subject,
            message,
        }

        try {
            await fetch('https://gabrielmurry-portfolio.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setName('')
                    setEmail('')
                    setSubject('')
                    setMessage('')
                    setIsLoading(false)
                    setIsSent(true)
                }
            })
        } catch (err) {
            console.log(err)
        }

        // fetch('http://localhost:3000/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then((res) => {
        //     console.log('Response received')
        //     if (res.status === 200) {
        //         console.log('Response succeeded!')
        //         setName('')
        //         setEmail('')
        //         setSubject('')
        //         setMessage('')
        //         setIsLoading(false)
        //         setIsSent(true)
        //     }
        // })

        // const message = {
        //     to: 'gabrielmurry.work@gmail.com',
        //     from: email,
        //     subject: subject,
        //     html: `
        //     <p><strong>Name:</strong>${name}</p>
        //     <p>${message}</p>`
        // }
        // sgMail
        //     .send(message)
        //     .then(() => {
        //         console.log('Email Sent!')
        //         setName('')
        //         setEmail('')
        //         setSubject('')
        //         setMessage('')
        //         setIsLoading(false)
        //         setIsSent(true)
        //     })
        //     .catch((err) => {
        //         console.error('Error: ', err)
        //     })
    }

    useEffect(() => {
        if (name) {
            setErrors(prev => ({ ...prev, name: false }))
        }
        if (email) {
            setErrors(prev => ({ ...prev, email: { blank: false, invalid: false } }))
        }
        if (message) {
            setErrors(prev => ({ ...prev, message: false }))
        }
    }, [name, email, message])

  return (
    <div id='wrapper' onClick={handleClose} className='fixed font-nunitoSans inset-0 flex justify-center items-center'>
        <div className='relative'>
            {/* absolute div placed behind main modal div with blur to have glowing effect */}
        <div className='absolute -inset-0.5 bg-[#185533] dark:bg-[#298050] rounded-lg blur opacity-75'></div>
            <div className='relative bg-white dark:bg-[#233931] w-[18rem] h-[27rem] sm:w-[25rem] sm:h-[36rem] flex flex-col items-center rounded-lg'>
                <div className='bg-[#185533] dark:bg-[#298050] w-full h-[2.25rem] sm:h-[3rem] flex justify-center items-center rounded-lg shadow-sm'>
                    <h3 className='absolute font-bold text-white dark:text-white text-base sm:text-2xl '>
                        Contact
                    </h3>
                    <div className='w-full flex justify-end'>
                        <h3 onClick={onClose} className='text-white dark:text-white text-sm sm:text-lg mr-5 cursor-pointer'>
                            <FaTimes />
                        </h3>
                    </div>
                </div>
                <div className='w-[13rem] sm:w-[20rem] h-full flex justify-center'>
                    <form className='w-full h-full'>
                        <div className='flex flex-col mt-3 sm:mt-5'>
                            <label htmlFor='name' className='text-[12px] sm:text-sm pb-1 sm:pb-2 font-bold flex'>
                                Name
                                <FaStar className='text-red-600 text-[5px] sm:text-[6px]' />
                            </label>
                            <input onChange={(e) => setName(e.target.value)} autoFocus type="text" id='name' placeholder='Your Name' className='w-full h-[1rem] sm:h-[2rem] text-[12px] sm:text-base bg-gray-100 dark:bg-[#172c24] outline outline-1 outline-gray-300 dark:outline-gray-500 rounded p-3 hover:outline-2 focus:outline-blue-400 dark:focus:outline-blue-400 focus:outline-2' />
                            {errors.name && (<div className='text-red-500 dark:text-red-400 text-[10px] sm:text-sm -mb-3 sm:-mb-5'>Please enter your name</div>)}
                        </div>
                        <div className='flex flex-col mt-3 sm:mt-5'>
                            <label htmlFor='email' className='text-[12px] sm:text-sm pb-1 sm:pb-2 font-bold flex'>
                                Email
                                <FaStar className='text-red-600 text-[5px] sm:text-[6px]' />
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='Your Email' className='w-full h-[1rem] sm:h-[2rem] text-[12px] sm:text-base bg-gray-100 dark:bg-[#172c24] outline outline-1 outline-gray-300 dark:outline-gray-500 rounded p-3 hover:outline-2 focus:outline-blue-400 dark:focus:outline-blue-400 focus:outline-2' />
                            {errors.email.blank && (<div className='text-red-500 dark:text-red-400 text-[10px] sm:text-sm -mb-3 sm:-mb-5'>Please enter your email</div>)}
                            {errors.email.invalid && (<div className='text-red-500 dark:text-red-400 text-[10px] sm:text-sm -mb-3 sm:-mb-5'>Please enter a valid email</div>)}
                        </div>
                        <div className='flex flex-col mt-3 sm:mt-5'>
                            <label className='text-[12px] sm:text-sm pb-1 sm:pb-2 font-bold'>
                                Subject
                            </label>
                            <input onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject (optional)' className='w-full h-[1rem] sm:h-[2rem] text-[12px] sm:text-base bg-gray-100 dark:bg-[#172c24] outline outline-1 outline-gray-300 dark:outline-gray-500 rounded p-3 hover:outline-2 focus:outline-blue-400 dark:focus:outline-blue-400 focus:outline-2' />
                        </div>
                        <div className='flex flex-col mt-3 sm:mt-5'>
                            <label className='text-[12px] sm:text-sm pb-1 sm:pb-2 font-bold flex'>
                                Message
                                <FaStar className='text-red-600 text-[5px] sm:text-[6px]' />
                            </label>
                            <textarea onChange={(e) => setMessage(e.target.value)} required id="message" rows="5" placeholder='Message' className='resize-none w-full text-[12px] sm:text-base bg-gray-100 dark:bg-[#172c24] outline outline-1 outline-gray-300 dark:outline-gray-500 rounded px-3 py-2 hover:outline-2 focus:outline-blue-400 dark:focus:outline-blue-400 focus:outline-2'></textarea>
                            {errors.message && (<div className='text-red-500 dark:text-red-400 text-[10px] sm:text-sm -mb-3 sm:-mb-5'>Please enter your message</div>)}
                        </div>
                        <div className='flex justify-center mt-7 sm:mt-8'>
                            { isLoading ? 
                                <BarLoader
                                    color='#185533'
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                    className='mt-3 sm:mt-5'
                                />
                                :
                                isSent ?
                                <div>
                                    <h3 className='text-[#185533] dark:text-white mt-1 text-[14px] sm:text-[1.5rem]'>Message Sent! 🤩</h3>
                                </div>
                                :
                                <button type='button' onClick={handleContactSubmit} className='bg-[#185533] dark:bg-[#298050] shadow-none w-full h-[1.75rem] sm:h-[2.5rem] text-[12px] sm:text-base rounded transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-300'>
                                    Send Message
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactModal