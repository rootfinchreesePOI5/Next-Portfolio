import React, { useContext, useState , useEffect } from 'react'
import Image from 'next/image'
import { github, menuB, menuW, moon, mypf, sun, xB, xW } from '@/assets/images'
import Link from 'next/link'
import { AppContext } from '@/context/AppContext'

const Navbar = ({menu , setMenu}) => {




    const { theme, setTheme } = useContext(AppContext)

    const changetheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const [menuIcon, setMenuIcon] = useState(false);

    const displayMenu = () => {
        menu === false ? setMenu(true) : setMenu(false);
        menuIcon === false ? setMenuIcon(true) : setMenuIcon(false);
    }

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.style.setProperty("--background", "#f6f6f6");
            document.documentElement.style.setProperty("--text-color", "#020617");
            document.documentElement.style.setProperty("--primary-color", "#a6a6a6");
            document.documentElement.style.setProperty(
                "--nav-color",
                "rgba(255, 255, 255, 0.748)"
            );
        } else {
            document.documentElement.style.setProperty("--background", "#01030e");
            document.documentElement.style.setProperty("--text-color", "#ffffff");
            document.documentElement.style.setProperty("--primary-color", "#131313");
            document.documentElement.style.setProperty(
                "--nav-color",
                "rgba(0, 0, 0, 0.695)"
            );
        }
    }, [theme]);




    return (
        <div style={{backdropFilter:'blur(10px)'}} className={`flex fixed w-full z-[5] justify-between items-center py-4 px-[4%] lg:px-[2%] bg-navcolor border-b-[1px] backdrop:blur(10px)`}>
            <Link href={'#hero'} className="flex items-center gap-4">
                <Image className='w-12 rounded-full' src={mypf} alt='my profile image' />
                <p>InfiniteDev</p>
            </Link>

            <ul className={`hidden lg:flex md:flex md:gap-14 justify-between w-[25%] `}>
                <Link className='transition-all duration-300 hover:text-purple-400' href={'#about'} >About</Link>
                <Link className='transition-all duration-300 hover:text-purple-400' href={'#projects'} >Projects</Link>
                <Link className='transition-all duration-300 hover:text-purple-400' href={'#testimonials'} >Testimonials</Link>
                <Link className='transition-all duration-300 hover:text-purple-400' href={'#contact'} >Contact</Link>
            </ul>

            <ul style={menu === false ? { transform: 'translateX(-105%)', transition: '0.5s ease' } : { transform: "translateX(-2%)", transition: '0.5s ease' }} className={`absolute bg-background text-textcolor h-[90vh] gap-6 flex flex-col top-[101%] lg:hidden sm:hidden justify-between w-full p-3 `}>
                <li className='flex flex-col gap-4'>
                <Link onClick={displayMenu} className='transition-all duration-300 hover:text-purple- w-[fit-content]' href={'#about'} >About</Link>
                <Link onClick={displayMenu} className='transition-all duration-300 hover:text-purple-400 w-[fit-content]' href={'#projects'} >Projects</Link>
                <Link onClick={displayMenu} className='transition-all duration-300 hover:text-purple-400 w-[fit-content]' href={'#testimonials'} >Testimonials</Link>
                <Link onClick={displayMenu} className='transition-all duration-300 hover:text-purple-400 w-[fit-content]' href={'#contact'} >Contact</Link>
                </li>
                <li className='flex flex-col items-center w-full gap-4'>
                   <Image className='w-[45px] h-[45px] p-2 rounded-full bg-zinc-800' src={github} alt='version'/> 
                   <p className='text-gray-600 firacode'>version 1.0.0.1</p>
                </li>
            </ul>

            <div className=" flex items-center gap-4">
                <div className='lg:hidden md:hidden'>
                <Image onClick={displayMenu} style={theme === 'light' ? { display: "none" } : { display: 'block' }} className=' cursor-pointer' src={menuIcon === false ? menuB : xB} alt='menu' />
                <Image onClick={displayMenu} style={theme === 'light' ? { display: "block" } : { display: 'none' }} className=' cursor-pointer' src={menuIcon === false ? menuW : xW} alt='menu' />
                </div>
                <Image onClick={changetheme} className='w-5 cursor-pointer hover:scale-[1.15] transition-all duration-150' src={theme === 'light' ? moon : sun} alt='toogle' />
                <Link href={'#contact'} className={`hidden lg:block py-1 px-6 bg-maincolor rounded-sm ${theme === 'dark' ? 'hover:bg-white' : 'hover:bg-black  hover:text-white'} hover:text-purple-600 transition-all duration-700`}>Hire me</Link>
            </div>
        </div>
    )
}

export default Navbar
