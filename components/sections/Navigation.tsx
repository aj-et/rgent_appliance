'use client'

import React from 'react'
import { nav } from '../const'
import Link from 'next/link'

const Navigation = () => {

  return (
    <div className='flex gap-4'>
      {nav.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Navigation