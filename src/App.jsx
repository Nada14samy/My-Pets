import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import { SignUp } from "./sections/index";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
