import React from 'react'
import { Link } from 'react-router-dom'; 
import { IoCompassOutline, IoLibrary  } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";


const Mainfooter = () => {
    
    
  return (
    <>
        <div className='flex fixed bottom-0 left-0 right-0 justify-center items-center bg-[#404142] h-14'>
            <ul className='flex gap-6 items-center text-yellow-400'>
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
    </>
  )
}

export default Mainfooter