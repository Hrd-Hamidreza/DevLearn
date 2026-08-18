//! ---------------------------------------- Import
import { axiosInstance } from "/src/api/axiosInstance";
//! ---------------------------------------- Variables
const url = "users";
//! ---------------------------------------- Functions
//! -------------------- userLoginFn
export async function userLoginFn({ data: formdata }) {
  const { email: typedEmail, password: typedPassword } = formdata;
  const { data: user, status } = await axiosInstance.get(
    `${url}?email=${encodeURIComponent(typedEmail)}&password=${encodeURIComponent(typedPassword)}`,
  );
  if (user?.length === 0) {
    throw new Error("Email or password is wrong");
  }
  const { email, password, role, purchasedCourses, ...blockedData } =
    user && user[0];
  return blockedData;
}
//! -------------------- UserRegisterFn
export async function userRegisterFn({ data }) {
  //! Variables
  const { name, email, password } = data && data;
  const rest = { avatar: `/public/images/users/3.png`, role: "student" };
  //! Get
  const { data: users, status: getStatus } = await axiosInstance.get(url);
  const exist = users?.find((user) => user.email === email);
  if (exist) {
    throw new Error("User with this email exists.");
  }
  //! Post
  const { data: user, status: postStatus } = await axiosInstance.post(url, {
    name,
    email,
    password,
    ...rest,
  });
  //! Return
  return user;
}
