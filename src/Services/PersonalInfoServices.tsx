import axios from "axios";
import UserModel from "../Model/UserModel";
import { API_URL } from "../APICONFIG";

export async function GetPersonInfoAsync() {
  try {
    // const token = localStorage.getItem("Token"); // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token
 // const response = await axios.get(`http://localhost:5203/api/user`);
 
    const response = await axios.get(`${API_URL}/personalInfo`);
    //alert(JSON.stringify(response));
    console.table(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export const CreatePersonInfoAsync = async (data: any) => {
  try {
    const response = await axios.post(
      `http://localhost:5203/api/personalInfo`,
      data
    );
    console.table(response);
    return response.data;
  } catch (error) {
    // throw new Error("Failed to update leave data: " + (error as Error).message);
    //console.error(error);
  }
};

// export const CreatePersonInfoAsync = async (data: any,userid :any) => {
//   try {
//     const res = await axios.post(`http://localhost:5203/api/personalInfo`, data,userid);
//     return res.data;
//   } catch (error) {
//     // throw new Error("Failed to update leave data: " + (error as Error).message);
//     //console.error(error);
//   }
// };
export const UpdatePersonInfoAsync = async (data: any,id:number) => {
  try {
    const res = await axios.put(`http://localhost:5203/api/personalInfo`, data);
    console.table(res);
    return res.data;
  } catch (error) {
    // throw new Error("Failed to update leave data: " + (error as Error).message);
    //console.error(error);
  }
};

export const DeletePersonInfoAsync = async (id:number) => {
  try {
    const res = await axios.delete(
      `http://localhost:5203/api/personalInfo/${id}`,
      
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
    console.error(error);
  }
};
