const { axiosInstance } = require(".");

export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/register", value);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const LoginUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/login", value);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetCurrentUSer = async () => {
  try {
    const response = await axiosInstance.get("api/users/get-current-user");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
