//! ---------------------------------------- Import
import { axiosInstance } from "/src/api/axiosInstance";
//! ---------------------------------------- Variables
const url = `menuItems`;
//! ---------------------------------------- Functions
//! -------------------- Get
export const getMenueItemsDataFn = async () => {
  const { data, status } = await axiosInstance.get(url);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
//! -------------------- Post
