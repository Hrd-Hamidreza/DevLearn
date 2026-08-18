//! ---------------------------------------- Import
import * as yup from "yup";
//! ---------------------------------------- Variables
export const registerValidation = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  email: yup
    .string()
    .required("Please enter your email.")
    .email("Please enter your email address correctly."),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "The password must contain at least 8 characters."),
  rePassword: yup
    .string()
    .required("Please repeat your password.")
    .oneOf(
      [yup.ref("password")],
      "The password repeat does not match the password.",
    ),
});
