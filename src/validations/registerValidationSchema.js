//! ---------------------------------------- Import
import * as yup from "yup";
//! ---------------------------------------- Variables
export const registerValidation = yup.object().shape({
  name: yup.string().required("لطفا نام خود را وارد نمایید."),
  email: yup
    .string()
    .required("لطفا ایمیل خود را وارد نمایید.")
    .email("لطفا ایمیل را به صورت صحیح وارد نمایید."),
  password: yup
    .string()
    .required("لطفا رمز عبور خود را وارد نمایید.")
    .min(8, "رمز عبور حداقل باید شامل 8 کاراکتر باشد."),
  rePassword: yup
    .string()
    .required("لطفا رمز عبور خود را تکرار نمایید.")
    .oneOf([yup.ref("password")], "تکرار رمز عبور با رمز عبور همخوانی ندارد."),
});
