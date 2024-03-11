import axios from "axios";
import { Console } from "console";
import UserModel from "../Model/UserModel";
import { API_URL } from "../APICONFIG";

// export const GetUserAsync = async () => {
//   try {
//     // Simulate an API call
//     const res = await axios
//       .get(`http://localhost:5203/api/user`)
//       .then((res) => {
//         return res;
//       });
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
export async function GetUserAsync(): Promise<{ data: UserModel[] }> {
  try {
    // const token = localStorage.getItem("Token"); // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token

    const response = await axios.get(`http://localhost:5203/api/user`);
    //console.log(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}
export const CreateUserAsync = async (data: any, id: number) => {
  try {
    const res = await axios.post(`${API_URL}/user`, data);
    return res.data;
  } catch (error) {
    // throw new Error("Failed to update leave data: " + (error as Error).message);
    //console.error(error);
  }
};
export const UpdateUserAsync = async (data: any) => {
  try {
    const res = await axios.put(`${API_URL}/user`, data);
    return res.data;
  } catch (error) {
    // throw new Error("Failed to update leave data: " + (error as Error).message);
    //console.error(error);
  }
};
