import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full h-2 border-t-2 border-stone-500'></div>
      <div className='w-full flex justify-between mx-auto text-center  px-5 py-5'>
        <div>logo</div>
        <div>pages</div>
        <div>contact & social media </div>
      </div>
      <div className='text-center py-5'>
        {/***social media***/}
        <p className='text-sm mt-2 opacity-50'>
          &copy; {new Date().getFullYear()} Forrest Hamza Dev. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer