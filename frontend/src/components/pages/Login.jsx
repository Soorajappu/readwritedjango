import React, {useState} from 'react'
import { FaFacebook, FaGoogle, FaTimes, FaTwitter } from 'react-icons/fa'
import {IoIosEye,IoIosEyeOff} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Signup from './Signup'




const Login = ({onClose}) => {

    const [open, setOpen] = useState(false)

    //handle toggle

    const toggle = () =>{
        setOpen(!open)
    }

    const [visible, setvisible] = useState(false)



  return (
    <>
        <section className={visible ? 'hidden' : 'mt-[34rem] -ml-28 md:mt-[40rem] md:ml-10 backdrop-blur-md'}>
            <div className=' w-[278px] rounded-xl md:w-80 bg-[#404142] h-96 overflow-hidden'>
                <button className='ml-2 mt-2' onClick={onClose}><FaTimes /></button>
                <form name='login' className='mt-10'>
                    <label className='text-white text-xl justify-center flex font-bold cursor-pointer transition ease-in-out' for="chk" aria-hidden="true">Login</label>
                    <input className='w-4/5 h-5 text-black justify-center flex bg-white rounded p-3 my-5 mx-auto pe-7' type="email" name="email" placeholder="Email" required="" />
                    <input className='w-4/5 h-5 text-black justify-center flex bg-white rounded p-3 my-5 mx-auto pe-7' type={(open === false)? 'password' : 'text'} name="pswd" placeholder="Password" required="" />
                    <div className='text-lg right-8 text-zinc-700 absolute top-[165px] md:right-9'>
                        {
                            (open === false)? <IoIosEye onClick={toggle}/> : <IoIosEyeOff onClick={toggle}/>
                        }   
                    </div>
                    <p><span className='text-white ml-8'>Create Account <Link onClick={() => setvisible(true)} className='hover:text-green-500'>SIGNUP</Link> </span></p>
                    <span><a href="#" className=' text-white ml-8 hover:text-blue-500'>Forgot password?</a></span>
                    <button className='w-4/5 h-7 my-3 mx-auto block justify-center text-white bg-yellow-600 hover:bg-yellow-500 text-base font-bold mt-5 rounded-full cursor-pointer'>login</button>
                    <div className='flex items-center justify-center gap-4 h-20 text-2xl'>
                        <a className=' text-white hover:text-blue-600' href="#"><FaFacebook /></a>
                        <a className=' text-white hover:text-blue-600' href="#"><FaGoogle /></a>
                        <a className=' text-white hover:text-blue-500' href="#"><FaTwitter /></a>
                    </div>
                </form>
            </div>

        </section>
        {visible && <Signup onClose={onClose}/>}

    </>
  )
}

export default Login