import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  //once the user has successfully logged in..
  // 1. show the toast
  // 2. navigate to the home page

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      console.log("user has been signed in!");
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      navigate("/");
    },

    //show the toast of the type of error

    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded-full w-full py-1 px-2 font-normal"
          {...register("email", { required: "Email is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message} </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded-full w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters ",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message} </span>
        )}
      </label>

      <span>
        <button
          type="submit"
          className="bg-teal-700 text-white p-2 font-bold hover:bg-teal-800 text-xl"
        >
          Login
        </button>
      </span>
    </form>
  );
};

export default SignIn;
//type: specify all the properties our form is going to have
