//! ---------------------------------------- Import
import { axiosInstance } from "/src/api/axiosInstance";
//! ---------------------------------------- Variables
const url = `articles`;
//! ---------------------------------------- Functions
//! -------------------- Get
export const getArticlesDataFn = async () => {
  const { data, status } = await axiosInstance.get(url);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
//! -------------------- Get
export const getArticleDataByIdFn = async (id) => {
  const { data, status } = await axiosInstance.get(`${url}/${id}`);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data;
};
