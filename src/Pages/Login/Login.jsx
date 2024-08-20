import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/generic/Input";
import Button from "../../components/generic/Button";
import axios from "axios";
import loginBackground from "../../images/login/login-background.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().label("Password"),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  function onSubmitHandler({ email, password }) {
    setIsLoading(true);
    axios
      .post("customers/login", {
        email,
        password,
      })
      .then(() => {
        toast.success("Login Success", {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message, {
          autoClose: 2000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="mx-auto w-[450px] p-8 mt-8">
      <ToastContainer />
      <div className="flex justify-center mb-8">
        <div className="w-[280px] h-[314px] bg-primary rounded-[500px] relative">
          <img
            src={loginBackground}
            alt="login-background"
            className="absolute bottom-1 right-10"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          id="email"
          label="Email"
          register={register}
          errors={errors}
          placeholder="johndoe@example.com"
        />

        <Input
          id="password"
          label="Password"
          type="password"
          register={register}
          errors={errors}
          placeholder="Your password"
        />

        <div className="flex justify-end ">
          <button className="text-darkBlue font-bold">
            <Link to="/forgot-password" type="button">
              Forgot password?
            </Link>
          </button>
        </div>

        <div className="flex">
          <Input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            register={register}
            errors={errors}
            className="mr-2"
          />

          <label htmlFor="rememberMe" className="cursor-pointer font-semibold">
            Remember me
          </label>
        </div>

        <div className="flex justify-center">
          <Button type="submit" isLoading={isLoading}>
            <span> Login </span>
          </Button>
        </div>

        <div className="flex flex-col items-center mt-8">
          <span>Don't have an account?</span>
          <button className="font-bold text-lg" type="button">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
