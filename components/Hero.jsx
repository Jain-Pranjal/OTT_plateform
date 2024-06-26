import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#333] mb-4">The movies you love, all in one place.</h2>
        <p className="mt-4 text-base text-[#666] leading-relaxed">Dive into movies! Trailers, reviews, showtimes - all at your fingertips. Dive into a world of movies! Explore trailers, buy tickets, and connect with fellow film fans.</p>
        <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
          <Link href="/movie" className="px-6 py-3 text-base font-semibold text-white bg-[#f032e6] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Explore Movies</Link>
          <Link href="/" className="px-6 py-3 text-base font-semibold text-[#f032e6] border border-[#f032e6] rounded-full hover:text-white hover:bg-[#f032e6] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Order Now</Link>
        </div>
      </div>
      <div className="md:h-[450px]">
        <img src="https://readymadeui.com/hotel-img.webp" className="w-full h-full object-cover rounded-lg shadow-xl" alt="Dining Experience" />
      </div>
    </div>
    </div>
  )
}

export default Hero
