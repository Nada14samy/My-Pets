import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/Input";
import { forgetPasswordInstance as axios } from "../../vendors/axios";
import loginBackground from "../../images/login/login-background.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    email: yup.string().required().email().label("Email"),
  })
  .required();

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isResetLinkSent, setIsResetLinkSent] = useState(false);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const payload = {
      email: data.email,
    };

    setEmail(data.email);

    axios
      .post("customers/forgotPassword", payload)
      .then(() => {
        setIsResetLinkSent(true);
        toast.success("Password reset link sent to your email", {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.response?.data?.message || "An error occurred", {
          autoClose: 2000,
        });
      });
  }

  if (isResetLinkSent) {
    return (
      <div className="mx-auto w-[450px] p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
        <p className="mb-4">
          We've sent a password reset link to {email}. Please check your inbox
          and follow the instructions to reset your password.
        </p>
        <p className="mb-4">
          If you don't see the email, check your spam folder.
        </p>
        <button
          onClick={() => setIsResetLinkSent(false)}
          className="bg-primary px-8 py-1 rounded text-white w-80 mb-4">
          Resend Link
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-secondary px-8 py-1 rounded text-white w-80">
          Return to Login
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-[450px] p-8 mt-8">
      <ToastContainer />
      <div className="flex justify-center mb-8">
        <div className="w-[280px] h-[314px] bg-primary rounded-[500px] relative">
          <img
            src={loginBackground}
            alt=""
            className="absolute bottom-1 right-10"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          label="Email"
          register={register}
          errors={errors}
          placeholder="johndoe@example.com"
        />

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-primary px-8 py-1 rounded text-white w-80">
            Reset Password
          </button>
        </div>

        <div className="flex flex-col items-center mt-8">
          <span>Remember your password?</span>
          <button className="font-bold text-lg" type="button">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
