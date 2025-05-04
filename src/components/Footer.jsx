import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='text-center py-2.5 bg-gray-100 shadow-inner mt-7'>
      <p className='text-[11px] sm:text-[13px] text-gray-900'>
        &copy; {currentYear} NeuroHub. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer