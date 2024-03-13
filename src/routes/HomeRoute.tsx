import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PersonalInformation from '../Components/PersonalInfo'
import AcademicDetail from '../Components/AcadmicDetail'
import AddressDetail from '../Components/AddressDetails'
import ShowList from '../Components/showList'
import Home from '../Components/home'
import ExperienceDetails from '../Components/ExperienceDetails'
import Logout from '../Components/LogOut'
import EmploymentDetails from '../Components/EmploymentDetails'
import UserLogin from '../Components/UserLogin'


export default function HomeRoute() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserLogin/>} />
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/personalInfo" element={<PersonalInformation />} />
      <Route path="/AcademicInfo" element={<AcademicDetail/>}></Route>
      <Route path="/AddressDetail" element={<AddressDetail/>}></Route>
      <Route path="/showList" element={<ShowList/>}></Route>
      <Route path="/ExperienceDetails" element={<ExperienceDetails/>}></Route>
      <Route path="/EmploymentDetailss" element={<EmploymentDetails/>}></Route>
      <Route path="/logout" element={<Logout/>} />
      </Routes>
      </BrowserRouter>
    </>
    </div>
  )
}
