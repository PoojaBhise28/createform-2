import React, { useEffect, useState } from "react";
import axios from "axios";
import UserModel from "../Model/UserModel";
import "../style/PersonalInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  CreatePersonInfoAsync,
  DeletePersonInfoAsync,
  GetUserByIdAsync,
  UpdatePersonInfoAsync,
} from "../Services/PersonalInfoServices";
import { CreateUserAsync, UpdateUserAsync } from "../Services/UserServices";
import ShowList from "./showList";
import userEvent from "@testing-library/user-event";

// export default function PersonalInfo() {
//   return (
//     <div>
//       <PersonalInformation/>
//     </div>
//   )
// }

const PersonalInformation = () => {
  const { id } = useParams();
  //alert(id);
  //const params = useParams();
  // const id = parseInt(params.id);

  const initialUserData: UserModel = {
    emailAddress: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    description: "",
    phoneNumber: "",
    IsActive: false,
    userId: 7,
    id: 0,
    isUpdate: false,
  };

  const [userData, setUserData] = useState<UserModel>(initialUserData);
  const navigate = useNavigate();

  const onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;
    setUserData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const onTextAreaFieldChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;

    setUserData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  // const SaveData = () => {
  //   //alert(JSON.stringify(userData));
  //   if(userData.id==0){
  //     CreatePersonInfoAsync(userData);
  //   }

  //   else{
  //     UpdatePersonInfoAsync(rowData,userData.id)
  //   }
  // };

  const SaveData = async () => {
    if (userData.id !== 0) {
      // alert(userData.id);
      console.log(userData.id + "update");
      await UpdatePersonInfoAsync(userData, userData.id);
      console.log("User data updated successfully.");
    } else {
      alert(userData.id + "new");
      await CreatePersonInfoAsync(userData);
      console.log("New user data created successfully.");
    }
    setUserData(initialUserData);
    navigate("/");
  };

  const handleShowList = () => {
    navigate("/");
  };


  useEffect(() => {
    async function fetchMyAPI() {
      let response = await GetUserByIdAsync(49);

      // alert(JSON.stringify(response));

      setUserData(response.data);
      //dataSet(response);
    }

    fetchMyAPI();
  }, [id]);


  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await GetUserByIdAsync(49);

  //     // alert(JSON.stringify(response));

  //     setUserData(response.data);
  //     //dataSet(response);
  //   }

  //   fetchMyAPI();
  // }, [id]);

  

  return (
    <div className="container">
      <h1>Personal Details</h1>

      <div className="textFields">
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userData.firstName}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userData.lastName}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="emailAddress">Email Id :</label>
        <input
          type="text"
          name="emailAddress"
          id="emailAddress"
          value={userData.emailAddress}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="mobileNumber">Mobile No :</label>
        <input
          type="text"
          name="mobileNumber"
          id="mobileNumber"
          value={userData.mobileNumber}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="phoneNumber">Phone Number :</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={userData.phoneNumber}
          autoComplete="off"
          onChange={onTextFieldChange}
        />
      </div>

      <div>
        <label>Description</label>

        <textarea
          onChange={onTextAreaFieldChange}
          name="description"
          cols={10}
          rows={4}
          value={userData.description}
          autoComplete="off"
        ></textarea>
      </div>
      <br />

      <button onClick={SaveData}>
        {/* {userData.id ===0 ?"Update":"Save"} */}
      </button>

      <button className="showbutton" onClick={handleShowList}>
        Show List
      </button>
    </div>
  );
};

export default PersonalInformation;
