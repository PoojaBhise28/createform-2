import React, { useState } from 'react';
import AcademicModel from '../Model/AcademicModel';
import '../style/AcadmicDetail.css';
import { CreateAcademicInfoAsync } from '../Services/AcademicDetailServices';




export default function AcademicDetail() {
    const initialUserData: AcademicModel = {
        Id: 0,
        InstitutionName: '',
        StartYear: '',
        EndYear: '',
        Percentage: '',
        Degree: '',
        UserId: '',
    };

    const [AcademicData, setAcademicData] = useState<AcademicModel>(initialUserData);

    const onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
        setAcademicData((prevState) => ({ ...prevState, [name]: newValue }));
    };

    const onSelectFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
        setAcademicData((prevState) => ({ ...prevState, [name]: newValue }));
    };


    const handelAcademicData = () => {
      alert(JSON.stringify(AcademicData));
      //CreatePersonInfoAsync(userData,2);
      CreateAcademicInfoAsync(AcademicData);
    };
  

    return (
        <div className="academic-container">
            <h1>Academic Details </h1>
          <div className=' academic-form'></div>
            <div className="textFields">
                <label htmlFor="InstitutionName">Institution Name :</label>
                <input
                    type="text"
                    name="InstitutionName"
                    id="InstitutionName"
                    value={AcademicData.InstitutionName}
                    autoComplete="off"
                    onChange={onTextFieldChange}
                />
              <br></br>
                <label htmlFor="StartYear">Start Year :</label>
                <input
                    type="date"
                    name="StartYear"
                    id="StartYear"
                    value={AcademicData.StartYear}
                    autoComplete="off"
                    onChange={onTextFieldChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="EndYear">EndYear :</label>
                <input
                    type="date"
                    name="EndYear"
                    id="EndYear"
                    value={AcademicData.EndYear}
                    autoComplete="off"
                    onChange={onTextFieldChange}
                />
            <br></br>

            <div className="degreelist">
                <br />
                <label htmlFor="Degree">Degree :</label>
                <select id="degree" name="degree" value={AcademicData.Degree} onChange={onSelectFieldChange}>
                    <option value={0}>---Select Your Degree----</option>
                    <option value={1}>Bachlore of Engineering</option>
                    <option value={2}>Bachlore OF Arts</option>
                    <option value={3}>Bachlore OF Science</option>
                    <option value={4}>Bachlore OF Commerce</option>
                </select>
            </div>
            <br></br>
              <div className='percentage'>
                <label htmlFor="Percentage">Percentage :</label>
                <input
                        type="text"
                        name="Percentage"
                        id="Percentage"
                        value={AcademicData.Percentage}
                        autoComplete="off"
                        onChange={onTextFieldChange}
                        />   
                </div>
                <button onClick={handelAcademicData}>Save</button>
                {/* <button onClick={showAcademicList}>Show Data</button> */}
            </div>

            
        </div>
    );
}
