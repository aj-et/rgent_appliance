import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between p-5 bg-red-500 w-full text-white'>
      <div>
        <Link href='/' className='text-2xl'>Rgent Appliance Repair</Link>
      </div>
      <div className='m-x-auto'>
        <Navigation />
      </div>
    </div>
  )
}

export default Header