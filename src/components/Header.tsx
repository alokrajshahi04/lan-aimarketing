import React, { useState } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">MarketingAI</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-4 py-2">
            <li><a href="#features" className="block py-2 text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#pricing" className="block py-2 text-gray-600 hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="block py-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 mt-2">Get Started</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header