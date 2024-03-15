import React, {useState} from 'react'
import { FaFacebook, FaGoogle, FaTwitter, FaTimes } from 'react-icons/fa'
import {IoIosEye,IoIosEyeOff} from 'react-icons/io'
import { Link } from 'react-router-dom'
import Login from './Login'


const Signup = ({onClose}) => {

    const [open, setOpen] = useState(false)

    //handle toggle

    const toggle = () =>{
        setOpen(!open)
    }

    const [open2, setOpen2] = useState(false)

    //handle toggle2

    const toggle2 = () =>{
        setOpen2(!open2)
    }

    const [visible, setvisible] = useState(false)

    

  return (
    <>
        <section className={visible ? 'hidden' : '-ml-28 mt-[34rem] flex justify-around items-center md:mt-[40rem] md:ml-10 '}>
            <div className='w-[278px] rounded-xl md:w-80 bg-[#404142] h-96 overflow-hidden relative'>
            
                <button className='ml-2 mt-2' onClick={onClose}><FaTimes /></button>
                    <form id='signup'>
                        <label className='text-white text-xl justify-center flex font-bold cursor-pointer transition ease-in-out' for="chk" aria-hidden="true">Sign Up</label>
                        <input className='text-black w-4/5 h-5 justify-center flex bg-white rounded p-3 my-5 mx-auto pe-7' type="text" name="text" placeholder="User Name" required="" />
                        <input className='text-black w-4/5 h-5 justify-center flex bg-white rounded p-3 my-5 mx-auto pe-7' type="email" name="email" placeholder="Email" required="" />
                        <input className='text-black w-4/5 h-5 justify-center flex bg-white rounded p-3 my-5 mx-auto pe-7' type={(open2 === false)? 'password' : 'text'} name="pswd" placeholder="Password" required="" />
                        <div className='text-lg right-8 text-zinc-700 absolute top-[169px] md:right-9 cursor-pointer'>
                            {
                                (open2 === false)? <IoIosEye onClick={toggle2}/> : <IoIosEyeOff onClick={toggle2}/>
                            }
                        </div>
                        <input className='text-black w-4/5 h-5 justify-center flex bg-white rounded p-3 my-5 mx-auto pe-7' type={(open === false)? 'password' : 'text'} name="pswd2" placeholder="Confirm Password" required="" />
                        <div className='text-lg right-8 text-zinc-700 absolute top-[213px] md:right-9 cursor-pointer'>
                            {
                                (open === false)? <IoIosEye onClick={toggle}/> : <IoIosEyeOff onClick={toggle}/>
                            }   
                        </div>
                        <button className='w-4/5 h-6 my-3 mx-auto block justify-center text-white bg-yellow-600 hover:bg-yellow-500 text-base font-bold mt-5 rounded-full cursor-pointer'>Sign up</button>
                        <div className='flex mt-7 items-center justify-center gap-4 text-2xl'>
                            <a className=' text-white hover:text-blue-500' href="#"><FaFacebook /></a>
                            <a className=' text-white hover:text-blue-600' href="#"><FaGoogle /></a>
                            <a className=' text-white hover:text-blue-500' href="#"><FaTwitter /></a>
                        </div>
                        <div className='mt-4 ml-8'>
                            <p><span className=' text-slate-200'>Alredy have account? </span><Link onClick={() => setvisible(true)} className='text-slate-200 hover:text-green-500' >LOGIN</Link> </p>
                        </div>
                    </form>
            </div>
        </section>
        {visible && <Login onClose={onClose}/>}

    </>
  )
}

export default Signup