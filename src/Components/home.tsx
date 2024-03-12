import React from "react";
import "../style/home.css";
import { Link, Route, Routes } from "react-router-dom";
import PersonalInformation from "./PersonalInfo";
import AcademicDetail from "./AcadmicDetail";
import AddressDetail from "./AddressDetails";

export default function Home() {
  return (
    <div className="home-container">
      <div className="box">
        <h1>Home</h1>
        <div className="section">
          <button>
            <Link to={"/personalDetails"}>Personal Details</Link>
          </button>
          <button>
            <Link to={"/AcademicDetails"}>Academic Details</Link>
          </button>
          <br></br>
          <br></br>
          <button>
            <Link to={"/AddressDetails"}>Address Details</Link>
          </button>
          <button>
            <Link to={"/EmploymentDetails"}>Employment Details</Link>
          </button>
          <br></br>
          <br></br>
          <button>
            <Link to={"/ExperienceDetails"}>Experience Details</Link>
          </button>
          <button>
            <Link to={"/logout"}>Logout</Link>
          </button>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
