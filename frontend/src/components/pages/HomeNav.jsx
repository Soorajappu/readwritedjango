import React from 'react'
import Logo from '../../assets/images/logo.png'
import Profile from '../../assets/images/profile.png'
import { IoIosNotifications,IoMdHome } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoCompassOutline, IoLibrary  } from "react-icons/io5";
import { FaPencilAlt, FaSearch } from "react-icons/fa";



const HomeNav = () => {
  return (
    <>
        <div className='absolute w-full h-[60px] flex justify-between items-center pl-3 pr-4 bg-[#404142] text-yellow-400'>
            <div className='flex gap-2'>
                <img className='w-8 rounded-full' src={Logo} alt="" />
                <a className='font-bold text-2xl hidden sm:block' href="#home">SITENAME</a>
            </div>
            <div className='flex items-center justify-center gap-2 lg:w-2/4'>
                <button>
                    <FaSearch className='hidden lg:absolute lg:ml-4 lg:-mt-2 lg:block ' />
                </button>
                <input type="search"  className='hidden lg:block rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4]' placeholder='search..' />
                <button className='ml-1 flex bg-[#696969] p-1 rounded-full'>
                    <IoIosNotifications className=' text-2xl' />
                    <GoDotFill className='hidden absolute ml-2 h-4 text-lg text-red-600' />
                </button>
                <button className='flex'>
                    <img className='w-[35px] bg-white rounded-full' src={Profile} alt="" />
                </button>
            </div>
            <div className='fixed flex bottom-0 left-0 right-0 text-sm justify-center items-center bg-[#404142] h-16 z-[1] lg:relative lg:h-14 lg:bg-transparent lg:text-base'>
                <ul className='flex gap-6 items-center'>
                    <li>
                        <Link to={'/Home'}>
                            <IoMdHome className='ml-3 text-white' />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Category'} className='cursor-pointer'>
                            <IoCompassOutline className='ml-6 text-white' />
                            Category
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Write'}>
                            <FaPencilAlt className='ml-3 text-white' />
                            Write
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <IoLibrary className='ml-4 text-white' />
                            Library
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    </>
  )
}

export default HomeNav