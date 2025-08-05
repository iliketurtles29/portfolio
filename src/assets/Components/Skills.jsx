import React from 'react'
import ScrollFloat from './ScrollFloat';

function Skills() {
  return (
    <div className='pt-60 px-35 text-white text-[40px] font-black'>
        <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            >
            Skills
            </ScrollFloat>

        <div>
           
        </div>
    </div>
  )
} 

export default Skills