//! ---------------------------------------- Import
//! ---------------------------------------- Variables
export const initialState = { user: {} };
//! ---------------------------------------- Function (userReducer)
export default function userReducer(userState, action) {
  //! ---------------------------------------- Variables
  //! ---------------------------------------- Switch
  switch (action.type) {
    //! -------------------- Info
    case "Info":
      return {
        ...userState,
        user:
          action.priority === "Email"
            ? { ...userState.user, email: action.email }
            : action.priority === "Password"
              ? { ...userState.user, password: action.password }
              : userState.user,
      };
    //! -------------------- LogIn
    case "Login":
      const { id, name, avatar } = action.user;
      return {
        ...userState,
        user: { id: id, name: name, avatar: avatar },
      };
    //! -------------------- LogOut
    case "LogOut":
      return { ...userState, user: {} };
  }
}
