import React from 'react'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const HeroRepairCard = () => {
  return (
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Same day appliance repair</h2>
        
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <CheckCircle className="text-red-500 mr-2" size={20} />
            <span>Flexible Call-To-Meet Appointments</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-red-500 mr-2" size={20} />
            <span>Best warranty on Parts and Labor</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-red-500 mr-2" size={20} />
            <span>Truck Stocked With Parts</span>
          </li>
        </ul>
        
        <Link href='#contact-us'>
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
            Make Appointment
          </button>
        </Link>
      </div>
  )
}

export default HeroRepairCard