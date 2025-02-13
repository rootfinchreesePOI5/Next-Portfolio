import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { wave } from '@/assets/images'
import Image from 'next/image'
import { backend, frontend, styles } from '@/assets/assets'

const About = () => {
    const [result, setResult] = useState('your name')
    return (
        <div id='about' className='flex flex-col gap-8'>
            <h1 className='heading firacode text-2xl md:text-4xl'>./About Me....</h1>
            <div className="flex flex-col gap-[5rem]">
                {/* first */}
                <div className='mt-[5rem] flex flex-col gap-[8rem] lg:grid lg:grid-cols-2 lgjustify-between pt-[10%]'>
                    <div className='relative flex'>
                        <Image className='w-12 rounded-full' src={logo} alt='intro' />
                        <div className="rounded-e-lg rounded-tl-lg  md:w-[60%] absolute flex items-center gap-3 bottom-full left-[15%] md:right-[20%] bg-textcolor text-background p-5 ">
                            <h1 className='firacode'>Hi! my name is <span className='text-purple-400'>InfiniteDev!</span></h1>
                            <Image className='w-8' src={wave} alt='waving' />
                        </div>
                        <div className='absolute top-full  lg:left-[5%] flex items-center md:justify-between w-full gap-2 mt-8 lg:p-3'>
                            <span className='w-5 h-5 bg-green-500 rounded-full border-2'></span>
                            <label className='firacode text-xs md:text-sm lg:text-xl'>Enter your Name:</label>
                            <input onChange={(e) => setResult(e.target.value)} className='bg-transparent p-1 border-b-2 w-[50%] ml lg:w-[60%] outline-none' type="text" placeholder='Write here...' />
                        </div>
                    </div>
                    <div>
                        <p className='text-1xl firacode overflow-x-scroll'>Hello,<span className='text-purple-500 cursor-pointer hover:text-pink-600  transition-all duration-500'>{result}</span>, I'm a full-stack developer.
                            More than 5 years experience.</p>
                    </div>
                </div>
                {/* second */}
                <div className='grid lg:grid-cols-3 w-full gap-8 md:px-[5%]'>
                    <div className='w-full  rounded-xl bg-textcolor text-background cursor-pointer min-h-[35vh] p-4'>
                        <h1 className='firacode text-xl text-cyan-700'>Frontend</h1>
                        {
                            frontend.map((item , index) => {
                                return <div key={index} className='p-6  gap-2'>
                                    <h5 className='underline'>{item.name}</h5>
                                    <ul className='p-3 text-sm'>
                                        <li>{item.des}</li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                    <div className='w-full rounded-xl bg-textcolor text-background  cursor-pointer min-h-[35vh] p-4'>
                        <h1 className='firacode text-xl text-red-400'>Backend</h1>
                        {
                            backend.map((item , index) => {
                                return <div key={index} className='p-6'>
                                    <h5 className='underline'>{item.name}</h5>
                                    <ul className='p-3 text-sm'>
                                        <li>{item.des}</li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                    <div className='w-full rounded-xl bg-textcolor text-background cursor-pointer min-h-[35vh] p-4'>
                        <h1 className='firacode text-xl text-green-400'>Styles</h1>
                        {
                            styles.map((item , index) => {
                                return <div key={index} className='p-6'>
                                    <h5 className='underline'>{item.name}</h5>
                                    <ul className='p-3 text-sm'>
                                        <li>{item.des}</li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
