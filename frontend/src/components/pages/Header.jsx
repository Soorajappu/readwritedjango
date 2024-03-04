import React from 'react'
import bookimages from '../../assets/images/bookimages.jpg'
import touch from '../../assets/images/touch.jpg'
import write from '../../assets/images/write.jpg'


export const Header = () => {
  return (
    <>
      <div className='bg-black items-center'>
        <div className='pt-20'>
          <div className=' text-center text-yellow-400 text-4xl'>
            <h1>WELLCOME TO READING TIME</h1>
          </div>
        </div>
        <div className='text-white text-center pt-20 pl-0 pr-0 pb-12'>
          <div className=' block w-4/5 max-w-7xl my-0 mx-auto'>

            <div className=' w-1/4 max-w-80 mr-2 inline-block align-top bg-zinc-900 box-border'>
              <img className=' w-32 mt-4' src={bookimages} alt="" />
              <h3>Read</h3>
              <p>You can read many story's hear.<br />This story's are write our own.<br />Hear you read short story,<br />stories,etc</p>
            </div>

            <div className=' w-1/4 max-w-80 mr-2 inline-block align-top bg-zinc-900 box-border'>
              <img src={write} alt="" />
              <h3>Write</h3>
              <p>You can also write your stories.<br />You can share your own stories.</p>
            </div> 

            <div className=' w-1/4 max-w-80 mr-2 inline-block align-top bg-zinc-900 box-border'>
              <img src={touch} alt="" />
              <h3>Be in Touch</h3>
              <p>You can also communicate with<br />others.You can chat and you can<br />comment the others stories.</p>
            </div> 

          </div>
        </div>
      </div>
    </>
  )
}
