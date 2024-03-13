
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <nav>
//       <ul>
      
//         <li><Link to="/personalInfo">Personal Details</Link></li>
//         <li><Link to="/AcademicInfo">Academic Details</Link></li>
//         <li><Link to="/AddressDetail">Employment Details</Link></li>
//         <li><Link to="/ExperienceDetails">Experience Details</Link></li>
//         <li><Link to="/showList">Show List</Link></li>
//         <li><Link to="/logout">Logout</Link></li>
//       </ul>
//     </nav>
//   );
// }

import React from "react";
import "../style/home.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import PersonalInformation from "./PersonalInfo";
import AcademicDetail from "./AcadmicDetail";
import AddressDetail from "./AddressDetails";

export default function Home() {

  const navigate=useNavigate();

  const handelPersonalInfo = ()=> {
    navigate('/personalInfo');
  }
  const handelAcademicDetails = ()=> {
    navigate('/AcademicInfo');
  }
  const handelEmploymentDetails = ()=> {
    navigate('/AddressDetail');
  }
  const handelExperienceDetails = ()=> {
    navigate('/ExperienceDetails');
  }
  const handellogout = ()=> {
    navigate('/logout');
  }
  
  const handelshowList = ()=> {
    navigate('/showList');
  }
  return (
    <div className="home-container">
      <div className="box">
        <h1>Home</h1>
        <div className="section">
          <button onClick={handelPersonalInfo}>
           Personal Details
          </button>
          <br></br>
          <button onClick={handelAcademicDetails}>
          Academic Details
          </button>
          <br></br>
          <button onClick={handelEmploymentDetails}>
          Employment Details
          </button>
          <br></br>
          
          <button onClick={handelExperienceDetails}>
          Experience Details
          </button>
          <button onClick={handelshowList}>
          Show List
          </button>
          <br></br>
          <button onClick={handellogout}>
          Log out
          </button>
        
        </div>
      </div>
    </div>
  );
}
