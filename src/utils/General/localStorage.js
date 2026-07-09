//? -------------------- Set Local Storage
export const setLocalStorage = ({ data, name }) => {
  localStorage.setItem(name, JSON.stringify(data));
};
//? -------------------- Get Local Storage
export const getLocalStorage = ({ name }) => {
  const storaged = localStorage.getItem(name);
  return JSON.parse(storaged);
};
