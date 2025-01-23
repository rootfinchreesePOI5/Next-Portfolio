import { MyProjects } from '@/assets/assets'
import { github } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => { 
  return (
    <div id='projects' className='flex flex-col gap-[6rem]'>
      <h1 className='heading firacode text-4xl'>./Projects....</h1>
      <div className="projects-container flex flex-col gap-[5rem] items-center">
        {
            MyProjects.map((item,index) =>{
                return <div key={index} className='projects-item flex flex-col lg:flex-row items-center gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='firacode text-xl underline'>{item.name}</h1>
                        <div className='grid grid-cols-3 p-2 w-full gap-6'>
                            {item.tools.map((item,index) => {
                                return <button className='py-2 px-4 border-2 rounded-full hover:bg-textcolor hover:text-background transition-all duration-700' key={index}>{item}</button>
                            })}
                        </div>
                        <p className='flex flex-col p-3 text-sm'><span className='firacode'>{item.name}</span>{item.des}</p>
                        <Link className='w-fit flex items-center gap-2' target='blank' href={item.repo}>
                        <Image className='w-fit h-[50px] bg-zinc-800 p-2 rounded-full' id='repo' src={github} alt='repo'/>
                        <p className='text-teal-600'>{'<----'} visit the github repo</p>
                        </Link>
                    </div>
                    <div>
                        <Link target='blank' className='flex w-fit items-center justify-center hover:scale-105 transition-all duration-700' href={item.link}>
                        <Image className='w-[80%] rounded-lg' src={item.mainImg} alt='project-Image'/>
                        </Link>
                    </div>
                </div>
            })
        }
        <Link target='_blank' href={'https://github.com/rootfinchreesePOI5?tab=repositories'} className='w-[50%] lg:w-[15%] rounded-sm text-background  h-[5vh] bg-textcolor hover:bg-purple-600 hover:text-textcolor  transition-all duration-700 flex items-center justify-center '>Show more</Link>
      </div>
    </div>
  )
}

export default Projects
