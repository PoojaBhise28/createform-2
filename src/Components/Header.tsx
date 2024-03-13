import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Layout.css";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <div>
        <form className="layout-container">
          <nav className="navbar">
            <ul>
              <li onClick={() => handleClick("/")}>Home</li>
              <li onClick={() => handleClick("/register")}>Register</li>
              <li onClick={() => handleClick("/personalInfo")}>PersonalInfo</li>
              <li onClick={() => handleClick("/AddressDetail")}>AddressDetail</li>
              <li onClick={() => handleClick("/EmploymentDetailss")}>EmploymentDetailss</li>
              <li onClick={() => handleClick("/ExperienceDetails")}>ExperienceDetails</li>
              <li onClick={() => handleClick("/showList")}>showList</li>
            </ul>
          </nav>
        </form>
      </div>
    </div>
  );
}

