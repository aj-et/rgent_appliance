import React from 'react'
import { services } from '../const'
import Brands from './Brands';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our services</h2>
        <p className="text-lg mb-12">
          Breakdowns of home appliances might make you abandon the course of your scheduled plans and cause a 
          tremendous mess in your kitchen or bathroom. Fortunately, you have reliable helpers!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-red-600 text-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Image src={service.icon} alt={`${service.name} Icon`} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
        <div className='mt-20'>
          <h4 className='text-3xl mb-5'>Brands</h4>
          <div className=''>
            <Brands />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage