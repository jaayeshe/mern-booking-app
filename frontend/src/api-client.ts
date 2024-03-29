import { RegisterFormData } from "./pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//makes the api call to register an user

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token Invalid");
  }

  return response.json();
};

//here we will place all our fetch requests..
//we are making a separate file for this because..
//it keeps our fetch requests separate from our components and makes the code cleaner.

//we have setup the register functionality to return a cookie with an auth token in it,..
//now we need to ensure that it's getting set correctly in the browser & then we'll use..
//this cookie to check if the user is logged in or not.
