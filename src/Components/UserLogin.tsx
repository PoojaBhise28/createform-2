
import React from 'react'
import { useEffect, useState } from "react";
import UserModel from '../Model/UserModel';
import { CreateUserAsync } from '../Services/UserServices';
import axios from 'axios';
import "../style/UserLogin.css"

export default function UserLogin() {
  return (
    <div>
      <DemoComponent/>
    </div>
  )
}
const DemoComponent = () => {
    const intialUserData: UserModel = {
      emailAddress: '',
      password: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      description: '',
      phoneNumber: '',
      IsActive: false,
      userId: 0,
      id: 0,
      isUpdate: false
    };
  
    const [userData, setUserData] = useState<UserModel>(intialUserData);
  
    const onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value;
      const name = event.currentTarget.name;
      setUserData((prevState: any) => ({ ...prevState, [name]: newValue }));
    };
  
    const OnShowData = () => {
      alert(JSON.stringify(userData));
      CreateUserAsync(userData,2);
      // axios
      //   .post("http://localhost:5203/api/user", userData)
      //   .then((res) => console.log("success", res))
      //   .catch((e) => console.log(e));
    };
    const fetchData = () => {
      axios
        .get(`http://localhost:5203/api/user`)
        .then((res) => console.log("data", res))
        .catch((e) => console.error(e));
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="container">
        <div className="container-form">
          <h1> Log In </h1>
  
          <div className="textFields">
            <label htmlFor="username">Email Id :</label>
            <input
              type="text"
              name="emailAddress"
              id="username"
              value={userData.emailAddress}
              autoComplete="off"
              onChange={onTextFieldChange}
            ></input>
            <br></br>
            <br></br>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              autoComplete="off"
              onChange={onTextFieldChange}
            ></input>
            {/* <a href="https://www.google.com/">Forgot Password? Semrush</a>
          <label>Click here for more information</label> */}
          </div>
          <br></br>
          <button onClick={OnShowData}>Login</button>
          <p>Don't have an ID? <a href="/register">Register</a></p>
        </div>
      </div>
    );
  };
  

  