//! ---------------------------------------- Import
import * as yup from "yup";
//! ---------------------------------------- Variables
export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email.")
    .email("Please enter a valid email."),
  password: yup.string().required("Please enter your password."),
});
