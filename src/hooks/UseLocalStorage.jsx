//! ---------------------------------------- Import
//! ---------------------------------------- Variables
//! ---------------------------------------- Hook (UseLocalStorage)
export default function UseLocalStorage(name) {
  //! ---------------------------------------- Function (LocalStorage)
  //? -------------------- Set Local Storage
  const setLocalStorage = (data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };
  //? -------------------- Get Local Storage
  const getLocalStorage = () => {
    const storaged = localStorage.getItem(name);
    return JSON.parse(storaged);
  };
  //! ---------------------------------------- Return
  return [setLocalStorage, getLocalStorage];
}
