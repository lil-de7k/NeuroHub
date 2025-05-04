import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import ProductCardContainer from '../components/ProductCardContainer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Footer />
    </div>
  )
}

export default HomePage