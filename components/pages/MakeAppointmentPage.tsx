import React from 'react'
import Image from 'next/image'
import { imagePlaceholder } from '@/public/images'

const MakeAppointmentPage = () => {
  // serviceProcess
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image src={imagePlaceholder} alt="Guarantee Icon" className="w-24 h-24" />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          You pay only for the jobs done. And done well.
        </h2>
        <p className="text-lg mb-12">
          Need same-day appliance repair? We're available 24/7 to answer your questions and address household appliance issues. 
          Our technicians start repairs promptly upon appointment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Book Online Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Online Or With Phone</h3>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pretium quam.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Identify Problem Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">We Identify the Problem</h3>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pretium quam.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Professional Arrives Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Professionals Arrives</h3>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pretium quam.</p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Solve Problem Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">We Solve Your Problem</h3>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pretium quam.</p>
          </div>
        </div>

        {/* <div className="mt-12">
          <a
            href="#appointment"
            className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold"
          >
            Make Appointment
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default MakeAppointmentPage