import * as yup from "yup";

const AccountLoginSchema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .min(6, "Password At Least 6 Characters")
    .max(24)
    .required(),
});

const AccountRegisterSchema = yup.object().shape({
  // name: yup.string().required("Required Field"),
  username: yup.string().min(3, "username At Least 3 Characters").required(),
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .min(6, "Password At Least 6 Characters")
    .max(24)
    .required(),
  // country: yup.string().required("Required Field"),
});

export {AccountLoginSchema, AccountRegisterSchema};
