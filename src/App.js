import {Routes , Route} from "react-router-dom";
import { HomePage } from "./Pages/index";
import {SignUp} from "./Section/index";

import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;
