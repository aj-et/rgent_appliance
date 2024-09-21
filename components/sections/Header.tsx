'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { menu, arrowDropDown, arrowDropUp } from '../../public/images'

const Header = () => {
  const [isArrowUp, setIsArrowUp] = useState(false)
  const arrowRef = useRef<HTMLImageElement>(null);
  const  handleToggleMenu = () => {
    setIsArrowUp(prevState => !prevState)
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (arrowRef.current && !arrowRef.current.contains(event.target as Node)) {
        setIsArrowUp(false); // Reset to default (arrowDropDown)
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className='relative'>
      <div className='flex justify-between p-5 bg-red-500 w-full text-white z-10'>
        <div>
          <h1 className='text-2xl'>Rgent Appliance Repair</h1>
        </div>
        {/* <div className='m-x-auto block lg:hidden filter invert'>
          <div className='flex'>
            <Image
              src={menu}
              alt="menu"
              width={30}
              height={30}
              onClick={handleToggleMenu}
            />
            <Image
              ref={arrowRef}
              src={isArrowUp ? arrowDropUp : arrowDropDown} // Toggle the image based on state
              alt={isArrowUp ? "Arrow Drop Up" : "Arrow Drop Down"}
              width={30}
              height={30}
              className='fixed left-1/3'
              onClick={handleToggleMenu} // Trigger toggle on click
            />
          </div>
          {isArrowUp && (
            <div className='flex flex-col absolute z-10 bg-white text-black'>
              <Navigation />
            </div>
          )}
        </div> */}
        <div className='m-x-auto hidden lg:block'>
          <Navigation />
        </div>
      </div>

    </div>
  )
}

export default Header