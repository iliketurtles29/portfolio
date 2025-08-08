import React from 'react';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Skills() {
  return (
    <div className="h-400 scroll-smooth leading-tight space-y-2">
   
      <div className='pt-50 px-125 text-white text-[48px] font-black'>
        <BlurText
          text="My current and ongoing"
          delay={150}
          animateBy="words"
          direction="top"
        />
        <BlurText
          text="skill set."
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>


      <div className='px-45 pt-10 flex gap-12 items-start'>
 
        <div className='flex flex-col gap-3 pt-25 min-w-[180px]'>
          <div className='flex items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-[#5EEEBB]'></div>
            <p className='text-white pl-2 font-thin'>Proficient</p>
          </div>
          <div className='flex items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-[#5EADEE]'></div>
            <p className='text-white pl-2 font-thin'>Familiar</p>
          </div>
          <div className='flex items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-[#ACAEAD]'></div>
            <p className='text-white pl-2 font-thin'>Still Learning</p>
          </div>
        </div>


        <div className='flex gap-10 pl-22'>
          <div className='w-[280px] h-[280px] bg-[#7B79795C] rounded-[25px] pt-6 pl-6 border-2 border-[#5EEEBB] flex text-white text-xl font-semibold'>
            Python
          </div>
          <div className='w-[280px] h-[280px] bg-[#7B79795C] rounded-[25px] border-2 border-[#5EADEE] flex pt-6 pl-6 text-white text-xl font-semibold'>
            Adobe XD
          </div>
          <div className='w-[280px] h-[280px] bg-[#7B79795C] rounded-[25px] border-2 border-[#ACAEAD] flex pt-6 pl-6 text-white text-xl font-semibold'>
            React
          </div>
          <div className='w-[280px] h-[280px] bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB] flex pt-6 pl-6 text-white text-xl font-semibold'>
            HTML & CSS
          </div>
        </div>
      </div>

 
      <div className='px-44 mt-10 flex gap-10'>
        <div className='w-[280px] h-[280px] flex-none bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB] flex pt-6 pl-6 text-white text-xl font-semibold'>
          Figma
        </div>
        <div className='w-[280px] h-[280px] flex-none bg-[#7B79795C] rounded-[25px] border-2 border-[#5EADEE] flex pt-6 pl-6 text-white text-xl font-semibold'>
          Git & GitHub
        </div>
        <div className='w-[280px] h-[280px] flex-none bg-[#7B79795C] rounded-[25px] border-2 border-[#ACAEAD] flex pt-6 pl-6 text-white text-xl font-semibold'>
          Tailwindcss
        </div>
        <div className='w-[280px] h-[280px] flex-none bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB] flex pt-6 pl-6 text-white text-xl font-semibold'>
          MySQL
        </div>
        <div className='w-[280px] h-[280px] flex-none bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB] flex pt-6 pl-6 text-white text-xl font-semibold'>
          Django
        </div>
      </div>
    </div>
  );
}

export default Skills;
