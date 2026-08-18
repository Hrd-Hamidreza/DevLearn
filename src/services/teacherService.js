//! ---------------------------------------- Import
import { axiosInstance } from "/src/api/axiosInstance";
//! ---------------------------------------- Variables
const url = `teachers`;
//! ---------------------------------------- Functions
//! -------------------- Get
export const getTeachersDataFn = async () => {
  const { data, status } = await axiosInstance.get(url);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
//! -------------------- Post
export const getTeacherDataByIdFn = async (id) => {
  const { data, status } = await axiosInstance.get(`${url}/${id}`);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
