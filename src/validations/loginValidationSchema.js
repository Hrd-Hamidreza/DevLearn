//! ---------------------------------------- Import
import * as yup from "yup";
//! ---------------------------------------- Variables
export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required("لطفا ایمیل خود را وارد نمایید.")
    .email("لطفا ایمیل معتبر وارد نمایید."),
  password: yup.string().required("لطفا رمز عبور خود را وارد نمایید."),
});
