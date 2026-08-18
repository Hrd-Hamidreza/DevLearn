//! ---------------------------------------- Import
import { axiosInstance } from "/src/api/axiosInstance";
//! ---------------------------------------- Variables
const url = `users`;
//! ---------------------------------------- Functions
//! -------------------- Get
export const getUsersDataFn = async () => {
  const { data, status } = await axiosInstance.get(url);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
//! -------------------- Get
export const getuserDataByIdFn = async (id) => {
  const { data, status } = await axiosInstance.get(`${url}/${id}`);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
