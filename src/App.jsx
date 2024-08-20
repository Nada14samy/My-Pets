import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/index";
import { SignUp } from "./Section/index";
import Login from "./Pages/Login/Login";

import "./App.css";
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
