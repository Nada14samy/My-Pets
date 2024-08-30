import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/Input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import Button from "../../components/generic/Button";
import { useState } from "react";
const schema = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  rePassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required("Repeat Password is required")
}).required();

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const[isLoading , setIsLoading]= useState(false);

  const onSubmit = async ({ name, email, password, rePassword }) => {
    try {
      await axios.post(
        "customers/signup",
        {
          name,
          email,
          password,
          passwordConfirm: rePassword,
        }
      );
      toast.success("Registration successful!", { autoClose: 2000 });
      window.location.pathname = "/verifyEmail";
    } catch (err) {
      console.log(err.response.data);
      if (err.response && err.response.status === 500) {
        if (err) {
          if (err.response.data.includes("index: email_1")) {
            setError("email", { message: "This email is already registered. Please use a different email." });
          }
          if (err.response.data.includes("index: name_1")) {
            setError("name", { message: "This name is already taken. Please choose a different name." });
          }
        }
      } else {
        toast.error("Something went wrong, please try again later.", { autoClose: 2000 });
      }
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="signUp w-full h-screen flex flex-col items-center justify-center">
      <ToastContainer />
      <div className="container flex flex-col justify-center items-center w-11/12 h-screen">
        <div className="w-1/3 my-3 flex justify-center items-center">
        <h3 className="text-3xl">Sign Up</h3>
        </div>
        <form
          className="flex flex-col justify-center w-1/3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="name"
            label="Full Name"
            register={register}
            errors={errors}
            placeholder="Name..."
            
          />
          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
            placeholder="Email..."
            type="email"
        
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            placeholder="Password..."
            type="password"
           
          />
          <Input
            id="rePassword"
            label="Repeat Password"
            register={register}
            errors={errors}
            placeholder="Repeat Password..."
            type="password"
           
          />

          <div className="flex justify-center w-full">
            <Button type="submit" isLoading={isLoading}>
              <span>Sign Up</span>
            </Button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-lg">Already have an account?</p>
          <Link to="/" className="font-semibold text-xl text-black">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;