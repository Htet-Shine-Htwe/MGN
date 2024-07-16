import React from 'react'
import { FaTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Logo from "@/assets/imgs/logo-icon.png";
import LogoTitle from "@/assets/imgs/logo-title.png";

const UserLayoutFooter = () => {
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">

        <Link to="#" className="text-white hover:text-gray-300 flex items-center">
            <img src={Logo} alt="logo" className="h-12" />
            <img src={LogoTitle} alt="logo" className="h-6" />

           
          </Link>

          <Link to="#" className="text-white hover:text-gray-300">
            <FaYoutube className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </Link>
          
          <Link to="#" className="text-white hover:text-gray-300">
            <FaTwitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-gray-300">&copy; 2024 Radian Team. All rights reserved.</p>
      </div>
    </div>
  )
}

export default UserLayoutFooter