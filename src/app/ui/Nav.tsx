import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            HealthCare Plus
          </div>
          <div className="flex space-x-6">
            <Link href="#home" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link
              href="#achievements"
              className="text-gray-600 hover:text-blue-600"
            >
              Achievements
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav
