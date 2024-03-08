import React, { useEffect, useState } from "react";
import axios from "axios";
import UserModel from "../Model/UserModel";
import "../style/PersonalInfo.css";
import { useNavigate } from "react-router-dom";
import {
  CreatePersonInfoAsync,
  DeletePersonInfoAsync,
} from "../Services/PersonalInfoServices";



// export default function PersonalInfo() {
//   return (
//     <div>
//       <PersonalInformation/>
//     </div>
//   )
// }


const  PersonalInformation = ({rowData}:{rowData : UserModel | null }) => {

  const initialUserData: UserModel = rowData ||  {
    emailAddress: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    description: "",
    phoneNumber: "",

    IsActive: false,
    userId: 16,
    id: 0,
    isUpdate: false
  };

  const [userData, setUserData] = useState<UserModel>(initialUserData);

  const onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;
    setUserData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const navigate = useNavigate();

  const onTextAreaFieldChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;

    setUserData((prevState) => ({ ...prevState, [name]: newValue }));

    //alert(name);
  };

  const SaveData = () => {
    alert(JSON.stringify(userData));
    //CreatePersonInfoAsync(userData,2);
    CreatePersonInfoAsync(userData);
  };

  const handleShowList = () => {
    navigate("/show");
  };

  

  const OnShowData = () => {
    alert(JSON.stringify(userData));
    //CreatePersonInfoAsync(userData,2);
    // CreatePersonInfoAsync(userData);
  };

  const handelDelete = () => {};

  const fetchData = () => {
    axios
      .get(`http://localhost:5203/api/personalInfo`)
      .then((res) => console.log("data", res))
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    
    setUserData(initialUserData);
  }, [rowData]);

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

     
      
      <button onClick={SaveData}>{userData.isUpdate ? "Update" : "Save"}</button>

   
      <button className="showbutton" onClick={handleShowList}>
        Show List
      </button>
    </div>
  );
}

export default PersonalInformation;