import { socials } from '@/assets/assets'
import { arrowB, arrowW, wave } from '@/assets/images'
import { AppContext } from '@/context/AppContext'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import Link from 'next/link'

const Hero = () => {
    const { theme } = useContext(AppContext);
    
    return (
        <div  className='flex flex-col gap-[4rem] md:gap-[8rem] mt-9' >
            {/* top */}
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-8 '>
                <h1 className='text-2xl md:text-4xl lg:text-8xl firacode'>Full-Stack <span className='firacode md:hidden'>Developer</span></h1>
                <div className="flex items-center lg:justify-end">
                    <Link target='_blank' href={'https://github.com/rootfinchreesePOI5?tab=repositories'} className=' flex items-center justify-between py-2 px-7 firacode text-2xl rounded-full w-full lg:w-[65%] bg-textcolor  text-background cursor-pointer hover:bg-maincolor transition-all duration-700 hover:text-textcolor'>
                        Projects
                        <Image className='w-[50px] p-2 rounded-full min-h-[50px] bg-background' src={theme === 'dark' ? arrowB : arrowW} alt='arrow' />
                    </Link>

                </div>
                <p style={{ wordSpacing: '2px' }} className='text-2xl'>My goal is to <i className='text-xl my-4 firacode  text-purple-800' style={{ fontWeight: '200' }}>write maintainable, clean </i>and <i className='text-xl m-4 firacode  text-purple-700' style={{ fontWeight: '200' }}>understandable code</i>to a process where development becomes enjoyable</p>
                <h1 className='hidden lg:flex text-2xl md:text-4xl lg:text-8xl firacode'>Developer</h1>
            </div>
            {/* center */}
            <div className=' w-full flex justify-center items-center gap-[2.5rem]'>
                <h1 className='firacode text-2xl'>{'My socials'}</h1>
                <div className='grid grid-cols-2 gap-4'>
                {
                    socials.map((item, index) => {
                        return <div key={index} className='flex flex-col items-center'>
                            <Link target='_blank' href={item.path} className='Btn' >
                                <Image className='svgContainer' src={item.img} alt='socials' />
                                <span style={{ background: `${item.color}` }} className='BG'></span>
                            </Link>
                            <p>{item.name}</p>
                        </div>
                    })
                }
                </div>
            </div>
            {/* bottom */}
            
        </div>
    )
}

export default Hero
