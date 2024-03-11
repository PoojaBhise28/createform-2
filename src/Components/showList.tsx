import React, { useState, useEffect } from "react";

import UserModel from "../Model/UserModel";
import "../style/showlist.css";

import {
  DeletePersonInfoAsync,
  GetPersonInfoAsync,
  UpdatePersonInfoAsync,
} from "../Services/PersonalInfoServices";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./PersonalInfo";

export default function ShowList() {
  const [userInfo, setUserInfo] = useState<UserModel[]>([]);
  const [rowData, setRowData] = useState<UserModel | null>(null);

  const navigatetoPersonalDetails = useNavigate();

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await GetPersonInfoAsync(7);
      alert(JSON.stringify(response));
      setUserInfo(response.data);
    }
    fetchMyAPI();
  }, []);

  // const handelUpdateData = (data: UserModel) => {
  //   setRowData(data);

  //   UpdatePersonInfoAsync(data, data.id);
  // };

  const handelUpdateData = (id: number) => {
    // const selectedUser = userInfo.find(user => user.userId === id);
    // setRowData(selectedUser || null);
    navigatetoPersonalDetails("/" + id);
  };

  const handelDelete = (id: number) => {
    alert("hello");
    DeletePersonInfoAsync(id);
  };

  return (
    <div className="show-container">
      <h1>Personal Data</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Mobile Number</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.description}</td>
              <td>
                <button type="button" onClick={() => handelUpdateData(data.id)}>
                  {/* <button type="button" onClick={() => handelUpdateData(data)}> */}
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => handelDelete(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {rowData && <PersonalInformation rowData = {rowData}/>} */}
    </div>
  );
}
