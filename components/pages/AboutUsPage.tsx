import React from 'react'
import Image from 'next/image'
import { imagePlaceholder } from '@/public/images'
import Link from 'next/link'

const AboutUsPage = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-12">
          Rgent Appliance Repair offers diverse household & commercial services: appliance repair, servicing, installation for any model.
          <br></br>Schedule now for swift doorstep assistance!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Transparency Section */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Transparency Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-sm">
              We are 100% transparent. <strong>No more extra bills</strong> for "additional services". With us, you will always
              know exactly how much the restoration will cost.
            </p>
          </div>

          {/* Complete Warranty Section */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Complete Warranty Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Warranty</h3>
            <p className="text-sm">
              With 20+ years of experience in appliance repair, you can be sure of the end result. In addition, every repair comes with a
              <strong> 3-month warranty.</strong>
            </p>
          </div>

          {/* Licensed Technicians Section */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={imagePlaceholder} alt="Licensed Technicians Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Licensed Technicians</h3>
            <p className="text-sm">
              Our technicians are capable of dealing with home appliances of any type and manufacturer. We have all the necessary and
              up-to-date certifications.
            </p>
          </div>
        </div>

        <div className="mt-12">
        <Link href='#contact-us'>
          <button className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Make Appointment
          </button>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUsPage