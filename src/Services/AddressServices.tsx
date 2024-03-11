import axios from "axios";

import { API_URL } from "../APICONFIG";

export async function GetAddressInfoAsync() {
  try {
    // const token = localStorage.getItem("Token"); // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token
 // const response = await axios.get(`http://localhost:5203/api/user`);
 
    const response = await axios.get(`${API_URL}/addressInfo`);
    //alert(JSON.stringify(response));
    console.table(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export const CreateAddressInfoAsync = async (data: any) => {
  try {
    const response = await axios.post(
        `${API_URL}/addressInfo`,
      data
    );
    console.table(response);
    return response.data;
  } catch (error) {
     throw new Error("Failed to update leave data: " + (error as Error).message);
    //console.error(error);
  }
};


// };
export const UpdateAddressInfoAsync = async (data: any,id:number) => {
  try {
    const res = await axios.put(`${API_URL}/addressInfo`, data);
    console.table(res);
    return res.data;
  } catch (error) {
     throw new Error("Failed to update leave data: " + (error as Error).message);
    //console.error(error);
  }
};

export const DeleteAddressInfoAsync = async (id:number) => {
  try {
    const res = await axios.delete(
      `${API_URL}/addressInfo/${id}`,
      
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
    console.error(error);
  }
};
