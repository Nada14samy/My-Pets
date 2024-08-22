import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import { SignUp } from "./sections/index";
import Login from "./Pages/Login/Login";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-Password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default App;
