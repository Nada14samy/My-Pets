import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage.jsx";
import { SignUp } from "./sections/index";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
     <Routes>
       {/*     //   
        
      //   <Route path="/login" element={<Login />} />
      */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
      </Routes> 
      
    </>
  );
};

export default App;
