import axios from "axios";


import EmployeModel from "../Model/EmployeModel";
import { API_URL } from "../APICONFIG";

export async function GetEmployeeByIdAsync(
  id: number
): Promise<{ data: EmployeModel }> {
  try {
    const response = await axios.get<EmployeModel>(
      `${API_URL}/employee/` + id
    );
    //alert(JSON.stringify(response));
    //console.table(response);

    return response;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export async function GetEmployeeAsync(
  id: number
): Promise<{ data: EmployeModel[] }> {
  try {
    

    const response = await axios.get<EmployeModel[]>(
      `${API_URL}/employee//ByUserId/` + id
    );
    
    return response;
  } catch (error) {
    throw new Error("Failed to update by id leave data: " + (error as Error).message);
  }
}

export const CreateEmployeeAsync = async (data: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/employee/`,
      data
    );
    console.table(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create: " + (error as Error).message);
  }
};

export const UpdateEmployeeAsync = async (data: any, id: number) => {
  try {
    const res = await axios.put(`${API_URL}/employee//${id}`, data);
    console.table(res);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
};

export const DeleteEmployeeAsync = async (id: number) => {
  try {
    const res = await axios.delete(
      `${API_URL}/employee//${id}`
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete leave data: " + (error as Error).message);
  }
};
