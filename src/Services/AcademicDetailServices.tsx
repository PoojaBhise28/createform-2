import axios from "axios";

import { API_URL } from "../APICONFIG";

export async function GetAcademicInfoAsync() {
  try {
    
 
    const response = await axios.get(`${API_URL}/academicInfo`);
    //alert(JSON.stringify(response));
    console.table(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export const CreateAcademicInfoAsync = async (data: any) => {
  try {
    const response = await axios.post(
      `http://localhost:5203/api/AcademicInfo`,
      data
    );
    console.table(response);
    return response.data;
  } catch (error) {
     throw new Error("Failed to update leave data: " + (error as Error).message);
    console.error(error);
  }
};


export const UpdateAcademicInfoAsync= async (data: any,id:number) => {
  try {
    const res = await axios.put(`http://localhost:5203/api/AcademicInfo`, data);
    console.table(res);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
    console.error(error);
  }
};

export const DeleteAcademicInfoAsync = async (id:number) => {
  try {
    const res = await axios.delete(
      `http://localhost:5203/api/AcademicInfo/${id}`,
      
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
    console.error(error);
  }
};
