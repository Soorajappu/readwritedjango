import React from 'react'
import bookimages from '../../assets/images/bookimages.jpg'
import touch from '../../assets/images/touch.jpg'
import write from '../../assets/images/write.jpg'


const Header = () => {
  return (
    <>
      <div className='bg-black items-center pb-0 'id='home'>
        <div className='pt-20'>
          <div className='mt-3 text-center text-yellow-400 text-sm'>
            <h1 className='sm:text-2xl md:text-4xl'>WELLCOME TO READING TIME</h1>
            <p className='text-xs sm:text-xm text-slate-300 md:text-sm'>A word is a small magic, a spell that can unlock the world.</p>
          </div>
        </div>
        <div className='text-white text-center pt-9 pb-12'>
          <div className=' mr-1 block w-4/5 max-w-7xl my-20 mx-auto sm:mr-12 lg:w-11/12'>

            <div className='max-w-60 mr-10 mb-10 inline-block align-top bg-zinc-900 box-border h-60 lg:h-72'>
              <img className='inline-block w-20 mt-4 lg:w-32' src={bookimages} alt="" />
              <h3 className='text-yellow-500 p-2'>Read</h3>
              <p className='mt-8 p-3 text-xs lg:text-sm lg:mt-6'>You can read many story's hear.This story's are write our own.Hear you read short story,stories,etc</p>
            </div>

            <div className='max-w-60 mr-10 mb-10 inline-block align-top bg-zinc-900 box-border h-60 lg:h-72'>
              <img className='inline-block w-20 h-16 mt-4 lg:w-32 lg:h-20' src={write} alt="" />
              <h3 className='text-yellow-500 p-2'>Write</h3>
              <p className='mt-10 p-4 text-xs lg:text-sm lg:mt-6'>You can also write your stories.You can share your own stories.</p>
            </div> 

            <div className='max-w-60 mr-10 inline-block align-top bg-zinc-900 box-border h-60 lg:h-72'>
              <img className='inline-block w-20 mt-4 lg:w-32' src={touch} alt="" />
              <h3 className='text-yellow-500 p-2'>Be in Touch</h3>
              <p className='mt-8 p-3 text-xs lg:text-sm lg:mt-6'>You can also communicate with others.You can chat and you can comment the others stories.</p>
            </div> 

          </div>
        </div>
      </div>
    </>
  )
}

export default Header