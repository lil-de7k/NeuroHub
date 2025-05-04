import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex py-2 px-4 sm:px-6 md:px-10 justify-between items-center bg-black w-full shadow-sm fixed z-50'>
      {/* Logo */}
      <p
        className='text-lg sm:text-[23px] font-semibold text-white cursor-pointer'
        onClick={scrollToTop}
      >
        NeuroHub
      </p>

      {/* Mobile menu button */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white p-2 focus:outline-none'>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className='text-lg' />
        </button>
      </div>

      {/* Social icons - desktop */}
      <div className='hidden md:flex gap-1.5 items-center'>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} className='text-white p-3 rounded-full text-[17px] transition-all duration-200 ease-in-out hover:bg-gray-900/70' />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className='text-white p-3 rounded-full text-[16px] transition-all duration-200 ease-in-out hover:bg-gray-900/70' />
        </a>
        <a href='https://wa.me/2012254567890' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-white p-3 rounded-full text-[17px] transition-all duration-200 ease-in-out hover:bg-gray-900/70' />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className='text-white p-3 rounded-full text-[17px] transition-all duration-200 ease-in-out hover:bg-gray-900/70' />
        </a>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-4 flex flex-col gap-2'>
          <a href='https://github.com/muhmedv' target='_blank' rel='noopener noreferrer' className='text-white text-[13px] flex items-center gap-3 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-[15px]' />
            <span>GitHub</span>
          </a>
          <a href='https://linkedin.com/in/muhammad-abdelaty/' target='_blank' rel='noopener noreferrer' className='text-white text-[13px] flex items-center gap-3 py-2'>
            <FontAwesomeIcon icon={faLinkedin} className='text-[14px]' />
            <span>LinkedIn</span>
          </a>
          <a href='https://wa.me/201012857997' target='_blank' rel='noopener noreferrer' className='text-white text-[13px] flex items-center gap-3 py-2'>
            <FontAwesomeIcon icon={faWhatsapp} className='text-[15px]' />
            <span>WhatsApp</span>
          </a>
          <a href='https://instagram.com/lil__de7k' target='_blank' rel='noopener noreferrer' className='text-white text-[13px] flex items-center gap-3 py-2'>
            <FontAwesomeIcon icon={faInstagram} className='text-[15px]' />
            <span>Instagram</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar