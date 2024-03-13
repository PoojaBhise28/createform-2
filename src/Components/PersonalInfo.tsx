import React, { useEffect, useState } from "react";

import UserModel from "../Model/UserModel";
import "../style/PersonalInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  CreatePersonInfoAsync,
  GetUserByIdAsync,
  UpdatePersonInfoAsync,
} from "../Services/PersonalInfoServices";

import Home from "./home";
import { validatePersonalInfo } from "./validatePersonalInfo";

export default function PersonalInfo() {
  return (
    <>
      <PersonalInformation></PersonalInformation>
    </>
  );
}

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
  const [errors, setErrors] = useState<string[]>([]);
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

  const SaveData = async () => {
    const validationErrors = validatePersonalInfo(userData);

    if (validationErrors.length === 0) {
      if (userData.id !== 0) {
        console.log(userData.id + "update");
        await UpdatePersonInfoAsync(userData, userData.id);
        console.log("User data updated successfully.");
      } else {
        console.log(userData.id + "new");
        await CreatePersonInfoAsync(userData);
        console.log("New user data created successfully.");
      }
      setUserData(initialUserData);
      navigate("/showList");
    } else {
      alert(validationErrors.join("\n"));
    }
  };

  const handleShowList = () => {
    navigate("/showList");
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await GetUserByIdAsync(74);

      // alert(JSON.stringify(response));

      setUserData(response.data);
      //dataSet(response);
    }

    fetchMyAPI();
  }, [id]);

  return (
    <div className="container-personalInfo">
      <h1>Personal Details</h1>

      <div className="textFields">
        <label htmlFor="firstName">First Name :</label>

        <input
          type="text"
          name="firstName"
          id="firstName"
          maxLength={50}
          value={userData.firstName}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          maxLength={50}
          value={userData.lastName}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="mobileNumber">Mobile No :</label>
        <input
          type="text"
          name="mobileNumber"
          id="mobileNumber"
          maxLength={10}
          value={userData.mobileNumber}
          autoComplete="off"
          onChange={onTextFieldChange}
        />

        <label htmlFor="phoneNumber">Phone Number :</label>
        <input
          type="text"
          name="phoneNumber"
          maxLength={10}
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
          maxLength={250}
          cols={10}
          rows={4}
          value={userData.description}
          autoComplete="off"
        ></textarea>
      </div>
      <br />
      <div className="button-perosnalinfo">
        <button onClick={SaveData}>
          Update
          {/* {userData.id ===0 ?"Update":"Save"} */}
        </button>

        <button className="showbutton" onClick={handleShowList}>
          Show List
        </button>
      </div>
    </div>
  );
};

// export default PersonalInformation;
