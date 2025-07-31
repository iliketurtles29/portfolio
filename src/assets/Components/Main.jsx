import React from 'react'
import { PiCursorLight } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import TextType from './TextType';


function Main() {
  return (
    <div className='px-35 pt-35'>
      <div className='flex items-start gap-2'>
        <div className='w-[25px] h-[25px] rounded-full bg-white'></div>
        <div>
          <p className='text-white/90 font-thin text-[18px]'>
            Hi! I’m Alvin Rubiales
          </p>
          <h2 className='text-6xl text-white font-normal leading-snug -ml-8'>
            Aspiring{' '}
            <span className='relative inline-block align-top'>
            
                <span className='inline-block px-3 py-1 border border-white whitespace-pre-line leading-snug'>
                <TextType
                    text={['Web Developer\n& Creative Web Designer ']}
                    speed={80}
                    delay={500}
                    loop={false}
                    cursor
                />

            
                <span className='absolute top-0 left-0 w-2 h-2 bg-white -translate-x-1/2 -translate-y-1/2'></span>
                <span className='absolute top-0 right-0 w-2 h-2 bg-white translate-x-1/2 -translate-y-1/2'></span>
                <span className='absolute bottom-0 left-0 w-2 h-2 bg-white -translate-x-1/2 translate-y-1/2'></span>
                <span className='absolute bottom-0 right-0 w-2 h-2 bg-white translate-x-1/2 translate-y-1/2'></span>

        
                <span className='absolute -bottom-6 -right-6 text-white'>
                    <PiCursorLight size={25} />
                </span>
                </span>
            </span>
            </h2>
        </div>
      </div>

        <div className='font-thin text-white text-[18px] pt-65'>
            <p>
            Detail-oriented Information Technology graduate with a specialization in Web and <br/>
            Mobile Application Development. Possessing a solid foundation in Python programming.<br/>
            I'm <span className='font-normal'>dedicated to lifelong learning and professional development</span>, continuously<br/>
            exploring new tools, frameworks, and techniques to keep up with evolving industry<br/>
            trends. 
            </p>
        </div>

        <div className="fixed bottom-12 right-10 flex flex-col items-center gap-5 z-50">
            <div className="h-32 w-[3px] bg-white rounded-4xl"></div>
            
            <a href="https://www.facebook.com/ALVINRUBIALES29" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaFacebookF size={20} />
            </a>

            <a href="https://www.linkedin.com/in/alvin-rubiales-6b7864373/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaLinkedinIn size={20} />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaTwitter size={20} />
            </a>

            <a href="https://www.instagram.com/albinruv/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaInstagram size={20} />
            </a>
        </div>

    </div>
  )
}

export default Main
