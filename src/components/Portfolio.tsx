import React from 'react'
import protfolio from '../data/protfolio'
import PortfolioItems from './PortfolioItems'


const Portfolio = (title, imgUrl, stack, link) => {
  return (

    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {protfolio.map(project => (
          <PortfolioItems
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>

  )
}

export default Portfolio