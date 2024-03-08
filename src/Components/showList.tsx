import React, { useState, useEffect } from "react";
import axios from "axios";
import UserModel from "../Model/UserModel";
import "../style/showlist.css";
import { API_URL } from "../APICONFIG";
import { DeletePersonInfoAsync, GetPersonInfoAsync, UpdatePersonInfoAsync } from "../Services/PersonalInfoServices";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./PersonalInfo";


export default function ShowList() {
  const [userInfo, setUserInfo] = useState<UserModel[]>([]);
  const [rowData, setRowData] = useState<UserModel | null>(null);
  const navigatetoPersonalDetails = useNavigate();

  const handelUpdate = (id:number) => {
   
    navigatetoPersonalDetails("/");
  };


  const handelDelete = (id:number) => {

   alert("hello");
   DeletePersonInfoAsync(id);   
  };
  
  const UpdatePersonInfo =(data:UserModel) => {

    setRowData(data);

  }

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await GetPersonInfoAsync();
      setUserInfo(response);
    }
    fetchMyAPI();
  }, []);

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
              <button type="button" onClick={() => handelUpdate(data.userId)}>
               Update
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
      {rowData && <PersonalInformation rowData = {rowData}/>}
    </div>
  );
}

// function ShowData() {
//   const [fetchedContacts, setFetchedContacts] = useState<UserModel[]>([]);

//   const fetchData = async () => {
//     const contacts = await GetPersonInfoAsync();
//     setFetchedContacts(contacts);
//   };

// useEffect(() => {
//   alert("use effect");
//   GetPersonInfoAsync()
//   axios
//     .get(`http://localhost:5203/api/personalInfo`)
//     .then(function (response) {
//       const fetchedContacts: UserModel[] = response.data.results.map(function (result:any) {
//         alert("use effect");
//         // console.table(result);
//         return {

//           EmailAddress: "",
//           password: "",
//           FirstName: result.firstName,
//           lastName: result.lastName,
//           mobileNumber: result.mobileNumber,
//           description: result.description,
//           phoneNumber: result.phoneNumber,
//           birthday: "",
//           isActive: result.isActive,
//           userId: 0,

//         };
//       });

//       setFetchedContacts(fetchedContacts);
//     })
//     .catch(error => {
//       console.error('Error fetching personal info:', error);
//     });
// }, []);

//   return (
//     <div className="container">
//       <h1>Personal Data</h1>
//       <table className="contact-list">
//         <thead>
//           <tr>
//             <th>Sr. no</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Phone Number</th>
//             <th>Mobile Number</th>
//             <th>Description</th>
//             <th>isActive</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fetchedContacts.map((data, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{data.firstName}</td>
//               <td>{data.lastName}</td>
//               <td>{data.phoneNumber}</td>
//               <td>{data.mobileNumber}</td>
//               <td>{data.description}</td>
//               <td>{data.IsActive}</td>
//               <td></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// import { useEffect, useState } from "react"
// import axios from "axios";

// interface User {
//   emailAddress:string;
//     password:string;
// }

// export default function Showlist() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState('');

//     useEffect(() => {
//       axios
//         .get<User[]>("http://localhost:5203/api/personalInfo")
//         .then((res) => setUsers(res.data))
//         .catch(err => {
//          setError(err.message);
//     });
//     }, []);

//     return (
//       <>
//           {error && <p className="text-danger">{error}</p>}
//           <ul>
//             {users.map((user) => (
//               <li key={user.emailAddress}>{user.password}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
/* {userInfo.map((value, key) => (
          <li>{value?.userId}</li>
        ))} */

// const fetchData = async () => {
//   const contacts = await GetPersonInfoAsync();
// };
// useEffect(() => {
//   var response = await fetchData();
//   alert(JSON.stringify(response));
// }, []);

/* {userInfo.map((value, key) => (
          <li>{value?.userId}</li>
        ))} */

// const fetchData = async () => {
//   const contacts = await GetPersonInfoAsync();
// };
// useEffect(() => {
//   var response = await fetchData();
//   alert(JSON.stringify(response));
// }, []);
