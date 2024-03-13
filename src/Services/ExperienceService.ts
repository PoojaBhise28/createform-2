import axios from "axios";
import ExperienceModel from "../Model/ExperienceModel";
import { API_URL } from "../APICONFIG";


export async function GetExperienceByIdAsync(
  id: number
): Promise<{ data: ExperienceModel }> {
  try {
    const response = await axios.get<ExperienceModel>(
      `${API_URL}/experience/` + id
    );
    //alert(JSON.stringify(response));
    //console.table(response);

    return response;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export async function GetExperienceAsync(
  id: number
): Promise<{ data: ExperienceModel[] }> {
  try {
    

    const response = await axios.get<ExperienceModel[]>(
      `${API_URL}/experience//ByUserId/` + id
    );
    
    return response;
  } catch (error) {
    throw new Error("Failed to update by id leave data: " + (error as Error).message);
  }
}

export const CreateExperienceAsync = async (data: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/experience/`,
      data
    );
    console.table(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create: " + (error as Error).message);
  }
};

export const UpdateExperienceAsync = async (data: any, id: number) => {
  try {
    const res = await axios.put(`${API_URL}/experience//${id}`, data);
    console.table(res);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
};

export const DeleteExperienceAsync = async (id: number) => {
  try {
    const res = await axios.delete(
      `${API_URL}/experience//${id}`
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete leave data: " + (error as Error).message);
  }
};
