import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex gap-6 bg-[#bf9ed5] px-3 py-2 rounded-full shadow-md">
        <div className="text-[#3b3b3b] px-6 py-2 rounded-full hover:bg-[#e0d6c5] transition cursor-pointer">
          Feature
        </div>
        <div className="text-[#3b3b3b] px-6 py-2 rounded-full hover:bg-[#e0d6c5] transition cursor-pointer">
          Business
        </div>
        <div className="text-[#3b3b3b] px-6 py-2 rounded-full hover:bg-[#e0d6c5] transition cursor-pointer">
          Pricing
        </div>
        <div className="text-[#3b3b3b] px-6 py-2 rounded-full hover:bg-[#e0d6c5] transition cursor-pointer">
          Services
        </div>
      </div>
    </div>
  )
}

export default Navbar
