import React from 'react'
import timeline from '../data/timeline'
import TimeLineItems from './TimeLineItems'
import Title from './Title'

const TimeLine = (year, title, location, duration, content) => {
  return (
    <div className='flex flex-col md:flex-row my-20 justify-center '>
      <div className='w-full md:w-7/12'>
        {/* {Title} */}
        <Title>Timeline</Title>
        {timeline.map(item => (
          <TimeLineItems
            year={item.year}
            title={item.title}
            location={item.location}
            duration={item.duration}
            content={item.content}
          />
        ))}
      </div>
    </div>)
}

export default TimeLine