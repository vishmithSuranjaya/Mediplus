import React from 'react'
import Navbar1 from '../components/navbar/Navbar'
import UpperNav from '../components/upper-nav/UpperNav'
import AppointForm from '../components/appointment-form/AppointForm'

const AppointmentForm = () => {
  return (
    <div>
      <UpperNav />
      <Navbar1 />
      <AppointForm />
    </div>
  )
}

export default AppointmentForm
