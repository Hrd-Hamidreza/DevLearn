//! ---------------------------------------- Import
import { axiosInstance } from "/src/api/axiosInstance";
//! ---------------------------------------- Variables
const url = `categories`;
//! ---------------------------------------- Functions
//! -------------------- Get
export const getCategoriesDataFn = async () => {
  const { data, status } = await axiosInstance.get(url);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
//! -------------------- Post
