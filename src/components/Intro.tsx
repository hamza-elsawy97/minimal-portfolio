import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7x1 mb-1 md:mb-3 font-bold dark:text-white'>Hamza Elsawy </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineering && Web Developer </p>
      <p className='text-sm max-w-xl mb-6 '>My name is Hamza sawy I'm a Web Designer & Developer using (html-css-js,Wordpress) based in Istanbul ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
        <br />
        Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.
        <br />
        In my free time you can find me at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences 🗺
        <br />
        Feel free to reach me at any time {' '} <a href="#" className='text-cyan-600
        hover:underline-offset-2 decoration-red-600' rel='Hamza development' >sssssss</a>{' '}!
      </p>
    </div>
  )
}

export default Intro