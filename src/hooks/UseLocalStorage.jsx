//! ---------------------------------------- Import
//! ---------------------------------------- Variables
const DEV_LEARN = "DevLearn";
//! ---------------------------------------- Hook (UseLocalStorage)
export default function UseLocalStorage() {
  //! ---------------------------------------- Function (LocalStorage)
  //? -------------------- Set Local Storage
  const setLocalStorage = (data) => {
    localStorage.setItem(DEV_LEARN, JSON.stringify(data));
  };
  //? -------------------- Get Local Storage
  const getLocalStorage = () => {
    const storaged = localStorage.getItem(DEV_LEARN);
    return JSON.parse(storaged);
  };
  //! ---------------------------------------- Return
  return [setLocalStorage, getLocalStorage];
}
