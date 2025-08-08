import React from 'react';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Skills() {
  return (
    <div className="h-400 scroll-smooth leading-tight space-y-2" >
      <div className='pt-50 px-110 text-white text-[48px] font-black '>
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

    <div className='px-30 pt-10 flex gap-40'>
      <div className='flex flex-col justify-start pt-20'>
        <div className='flex items-center mb-3'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#5EEEBB]'></div>
          <p className='text-white pl-2 font-thin'>Proficient</p>
        </div>
        <div className='flex items-center mb-3'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#5EADEE]'></div>
          <p className='text-white pl-2 font-thin'>Familiar</p>
        </div>
        <div className='flex items-center'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#ACAEAD]'></div>
          <p className='text-white pl-2 font-thin'>Still Learning</p>
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='w-[250px] h-[250px] bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB]'></div>
        <div className='w-[250px] h-[250px] bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB]'></div>
        <div className='w-[250px] h-[250px] bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB]'></div>
        <div className='w-[250px] h-[250px] bg-[#7B79795C] rounded-[25px] border-2 border-[#5EEEBB]'></div>
      </div>
    </div>

    </div>

  );
}

export default Skills;
