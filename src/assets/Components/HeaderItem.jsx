import React from 'react';

function HeaderItem({ name }) {
  const id = name.toLowerCase(); // e.g., "Skills" → "skills"

  return (
    <a
      href={`#${id}`}
      className='text-white text-[18px] cursor-pointer hover:underline'
    >
      {name}
    </a>
  );
}

export default HeaderItem;
