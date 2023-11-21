import  { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='2xl:mx-[10rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] sm:mx-[1rem] pad:mx-[.8rem] mob:mx-[.6rem]  1.5xl:my-12 lg:my-6 sm:my-4 pad:my-3 mob:py-3 grid 1.5xl:grid-cols-real-nav lg:grid-cols-xl-nav sm:grid-cols-md-nav'>
            <h1 className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl pad:text-3xl mob:text-3xl font-extrabold'>anow</h1>
            <ul className='hidden  md:ml-[0%] sm:ml-[20%] lg:flex gap-8 1.5xl:justify-around 1.5xl:gap-0 lg:justify-end xl:gap-12 lg:col-1 sm:col-span-1 sm:items-center tracking-[0.07em] text-[#222222]'>
                <li>
                    <a href="/" className='text-[#2c2c2c] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>demos</a>
                </li>
                <li>
                    <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>about us</a>
                </li>
                <li>
                    <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>portfolio</a>
                </li>
                <li>
                    <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>team</a>
                </li>
                <li>
                    <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>news</a>
                </li>
                <li>
                    <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>contact</a>
                </li>
                <li>
                    <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FD8558] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>other pages</a>
                </li>
            </ul>
            <div onClick={handleNav} className="flex lg:hidden col-start-3 justify-end items-center cursor-pointer">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#FFFFFF]  ease-in-out duration-500 z-[50]" : 'z-[50] fixed left-[-100%] h-full ease-in-out duration-500'}>
            <h1 className="w-full text-3xl font-bold text-[#FD8558] m-4">ANOW</h1>
            <ul className='p-4 grid gap-6'>
                <li>
                    <a href="#destination" className='text-[#2C2C2C] text-xl transition-all duration-300 hover:text-[#FD8558] hover:text-2xl'>Home</a>
                </li>
                <li>
                    <a href="#offer" className='text-[#2C2C2C] text-xl transition-all duration-300 hover:text-[#FF715B] hover:text-2xl'>Product</a>
                </li>
                <li>
                    <a href="#tour" className='text-[#2C2C2C] text-xl transition-all duration-300 hover:text-[#FF715B] hover:text-2xl'>FAQ</a>
                </li>
                <li>
                    <a href="#blog" className='text-[#2C2C2C] text-xl transition-all duration-300 hover:text-[#FF715B] hover:text-2xl'>Contact</a>
                </li>
            </ul>
            </div>
        </div>
  )
}

export default Navbar