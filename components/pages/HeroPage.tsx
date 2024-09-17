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
          height={1000}
          // layout="responsive"
          // className="object-cover"
        />
      </div>
      <div className='absolute top-[325px] left-[1050px] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4'>
        <HeroRepairCard />
      </div>
    </div>
  )
}

export default HeroPage