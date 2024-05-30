import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-12 px-8 font-sans tracking-wide">
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
        <div className="lg:col-span-2">
          <h4 className="text-lg font-bold mb-6 text-[#333]">About Us</h4>
          <p className="text-gray-600 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
            mi eu pulvinar cursus, sem elit interdum mauris.</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[#333]">Services</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Web
              Development</a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Mobile App
              Development</a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">UI/UX
              Design</a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Digital Marketing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[#333]">Resources</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Webinars</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Ebooks</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Templates</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[#333]">About Us</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Our Story</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Mission and
              Values</a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Team</a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-blue-600 text-[15px]">Testimonials</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
