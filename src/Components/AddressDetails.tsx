import React, { useState } from 'react';

import '../style/AddressDetails.css';

import { CreateAddressInfoAsync } from '../Services/AddressServices';
import AddressModel from '../Model/AddressModel';





export default function AddressDetail() {
    const initialUserData: AddressModel = {
        Address: '',
        City: '',
        StateId: '',
        CountryId: 0
    };

    const [AddressData, setAddressData] = useState<AddressModel>(initialUserData);

    const onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
        setAddressData((prevState: any) => ({ ...prevState, [name]: newValue }));
    };

    const onSelectFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
        setAddressData((prevState: any) => ({ ...prevState, [name]: newValue }));
    };


    const handelAddressData = () => {
      alert(JSON.stringify(AddressData));
      //CreatePersonInfoAsync(userData,2);
      CreateAddressInfoAsync(AddressData);
    };
    const onTextAreaFieldChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
    
        setAddressData((prevState) => ({ ...prevState, [name]: newValue }));
        
      };
  

    return (
        <div className="Address-container">
            <h1>Address Details </h1>
          <div className=' Address-form'></div>
         
        <div className="textFields">
        <label>Address</label>
        <textarea
                onChange={onTextAreaFieldChange}
                name="Address"
                cols={10}
                rows={4}
                value={AddressData.Address}
            ></textarea>
           
          <br></br>
                <label htmlFor="City">City :</label>
                <input
                    type="text"
                    name="City"
                    id="City"
                    value={AddressData.City}
                    autoComplete="off"
                    onChange={onTextFieldChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="StateId">State Id :</label>
                <input
                    type="text"
                    name="StateId"
                    id="StateId"
                    value={AddressData.StateId}
                    autoComplete="off"
                    onChange={onTextFieldChange}
                />
            <br></br>
            <label htmlFor="CountryId">Country Id :</label>
                <input
                    type="text"
                    name="CountryId"
                    id="CountryId"
                    value={AddressData.CountryId}
                    autoComplete="off"
                    onChange={onTextFieldChange}
                />
            <br></br>
           
             
                <button onClick={handelAddressData}>Save</button>
                <button >Show Data</button>
            </div>

            
        </div>
    );
}
