'use client'

import React from 'react'
import { nav } from '../const'

const Navigation = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex gap-4'>
      {nav.map((item) => (
        // <a key={item.id} href={`#${item.id}`}>{item.name}</a>
        <button key={item.id} onClick={() => handleSmoothScroll(item.id)}>{item.name}</button>
      ))}
    </div>
  )
}

export default Navigation