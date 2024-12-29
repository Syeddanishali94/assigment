'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="py-4 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-foreground">
            My Blog
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-primary-foreground hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-primary-foreground hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-primary-foreground hover:text-white">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden text-primary-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/"
                  className="block text-primary-foreground hover:text-white"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-primary-foreground hover:text-white"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-primary-foreground hover:text-white"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

