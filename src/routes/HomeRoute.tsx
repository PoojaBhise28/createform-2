import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PersonalInformation from '../Components/PersonalInfo'
import AcademicDetail from '../Components/AcadmicDetail'
import AddressDetail from '../Components/AddressDetails'

export default function HomeRoute() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<HomeRoute />} />
      <Route path="/" element={<PersonalInformation />} />
      <Route path="/AcademicInfo" element={<AcademicDetail/>}></Route>
      <Route path="/AddressDetail" element={<AddressDetail/>}></Route>
     
        </Routes>
      </BrowserRouter>
    </>
    </div>
  )
}
