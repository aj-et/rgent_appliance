import React from 'react'
import { contacts } from '../const'
import Image from 'next/image'
import ContactForm from '../sections/ContactForm'

const ContactUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          Contact Us
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          If you have any questions at all, feel free to contact us at any time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {contacts.map((contact) => (
          <div key={contact.name} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-500">
              <Image 
                src={contact.image} 
                alt={contact.name} 
                width={30} 
                height={30} 
                className="filter invert"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{contact.name}</h4>
            <p className="text-gray-600 text-center">{contact.content}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUsPage