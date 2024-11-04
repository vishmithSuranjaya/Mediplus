import React from 'react'
import UpperNav from '../components/upper-nav/UpperNav'
import Navbar1 from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Details from '../components/details/Details'
import Counts from '../components/counts/Counts'
import WhoweAre from '../components/ourDetails/WhoweAre'
import Footer from '../components/footer/Footer'

const Index = () => {
  return (
    <div>
      <UpperNav />
      <Navbar1 />
      <Banner />
      <Details />
      <Counts />
      <WhoweAre />
      <Footer />
    </div>
  )
}

export default Index
