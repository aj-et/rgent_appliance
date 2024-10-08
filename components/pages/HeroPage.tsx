import React from 'react'
import Image from 'next/image'
import HeroRepairCard from '../cards/HeroRepairCard'
import { applianceRepair } from '@/public/images'

const HeroPage = () => {
  return (
    <div className='relative'>
      <div className='flex justify-center'>
        <Image
          src={applianceRepair}
          alt="Appliance Repair"
          width={1000}
          priority
          // layout="responsive"
          // className="object-cover"
        />
      </div>
      <div className='absolute top-[325px] left-[300px] lg:left-[750px] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4 hidden md:block'>
        <HeroRepairCard />
      </div>
    </div>
  )
}

export default HeroPage