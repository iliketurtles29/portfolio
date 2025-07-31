import React from 'react'
import { HiDownload } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import background from '../images/background.png'

function Header() {
  const menu = [
    { name: 'home' },
    { name: 'skills' },
    { name: 'projects' },
    { name: 'contacts' },
  ];

  return (
   <div className='flex items-center justify-between px-10 py-5'>

      <div className='text-[18px] font-normal text-white'> 
        Alvin Rubiales 
        <div className='text-[12px] text-white/50 -mt-1 font-extralight'>Laguna, Philippines</div>
      </div>
      

      <div className='flex gap-15 justify-center flex-grow'>
        {menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} />
        ))}
      </div>

      <div className='flex items-center text-[18px] gap-2 bg-white/8 text-white px-5 py-2 rounded-[70px] cursor-pointer border-white/9 border-[2px]'>
        <button className='text-1xl cursor-pointer'>download cv</button>
        <HiDownload />
      </div>

    </div>
  );
}

export default Header;
