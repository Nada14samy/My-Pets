import React from "react";
import { HomePage } from "./Pages/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
