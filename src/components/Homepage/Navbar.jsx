import React from 'react'
import { Link } from 'react-router'
import Btn from '../Common/Btn'

function Navbar() {
  return (
    <div>
        <div className="relative z-10 flex justify-between items-center px-52 py-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[url('/Vector.png')] bg-contain bg-no-repeat bg-center " />
              <span className="font-medium tracking-wide text-3xl">Squid</span>
            </div>
            <div className="flex items-center gap-8 text-lg text-gray-300">            
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/login">
                <Btn name="Login"/>
              </Link>
            <Link to="/signup">
              <Btn name="Signup"/>
            </Link>
            </div>
          </div>
    </div>
  )
}

export default Navbar