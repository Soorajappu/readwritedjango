import React from 'react'
import HomeNav from './HomeNav'
import Mainfooter from './Mainfooter'

const Maincontact = () => {
  return (
    <>
        <HomeNav />
        <div className=' bg-black p-4 pt-32 pb-16' id='contact'>
            <div className='rounded-md bg-gradient-to-tr from-yellow-300 to-orange-500 p-4 md:w-96 md:m-auto lg:m-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Contact us</h1>
                </div>
                <div>
                    <form action="#">
                        <p>Name</p>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <input type="text" name="user" placeholder="User Name" class="username" className='w-full rounded-lg p-1 text-sm' />
                        </div>  

                        <p>Email</p>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" name="email" placeholder="Email" class="email" className='w-full rounded-lg p-1 text-sm' />
                        </div>

                        <p>Type your message</p>
                        <div>
                            <textarea className='w-full h-28 rounded-lg p-1 text-sm' required="required" placeholder='Messages'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Mainfooter />
    </>
  )
}

export default Maincontact