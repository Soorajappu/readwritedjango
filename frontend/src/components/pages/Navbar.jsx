import React, { useState, useEffect, useRef } from 'react'
import {Link} from 'react-scroll'
import {FaBars,FaTimes} from 'react-icons/fa'
import Login from '../pages/Login'
// import {BiSearch} from 'react-icons/bi'




const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handileClick = () => setNav(!nav)

    const [visible, setvisible] = useState(false)

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setvisible(false);
            }
        };
        document.addEventListener("mousedown", handler);
    });

  return (
    <>
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#404142] text-yellow-400' ref={menuRef}>
            <div>
                <a className='font-bold text-2xl' href="#home">SITENAME</a>
            </div>

            {/* Login page */}
            {visible && <Login onClose={() => setvisible(false)} close={() => setvisible(false)} />}

            {/* menu */}
            
            {/* <label htmlFor="default-search">
                <div className='flex'>
                    <input className='border-none ' type="search" /> &nbsp;
                    <button className='border border-none m-2 text-[#f9f954] hover:bg-yellow-400 hover:text-white rounded-full p-1'> <BiSearch /> </button>
                </div>
            </label> */}

            {/* <form action="" className='relative w-max mx-auto'>
                <input type="search" name='search' id='search' 
                className='relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12
                focus:w-full focus:border-[#f9f954] focus:cursor-text focus:pl-16 focus:pr-4' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute inset-y-0 my-auto w-12 h-8 px-3.5 stroke-gray-500 border-r border-transparent peer-focus:border-lime-300 peer-focus:stroke-lime-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </form> */}

            <ul className='hidden md:flex border border-none border-yellow-400 rounded-md'>
                <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <Link to="home" href='#home' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <Link to="about" href='#about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <Link to="contact" href='#contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
                <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <Link to="login" onClick={() => setvisible(true)} smooth={true} duration={500} >
                        Login
                    </Link>
                </li>

                {/* <li>
                    <label htmlFor="default-search">
                        <div>
                            <input className='border-2 border-[#e9e9eb] hover:border-yellow-400 rounded-md bg-transparent shadow-xl' type="search" /> &nbsp;
                            <button className='border border-none text-[#f9f954] hover:bg-yellow-400 hover:text-black rounded-lg px-2'> Search </button>
                        </div>
                    </label>
                </li> */}
            </ul>

            
    

            {/* Hamburger */}
            <div onClick={handileClick} className='md:hidden z-10 cursor-pointer'>
                { !nav ? <FaBars /> : <FaTimes /> }
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#404142] flex flex-col justify-center items-center'}>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6'>
                    <Link onClick={handileClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6 mt-2'>
                    <Link onClick={handileClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6 mt-2'>
                    <Link onClick={handileClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6 mt-2'>
                    <Link onClick={() => {setvisible(true); handileClick(false)}} to="Login" smooth={true} duration={500} >
                        Login
                    </Link>
                </li>
                
            </ul>
            
        </div>
    </>
  )
}

export default Navbar