import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main w-full flex justify-between items-center">
      <div className="main-text flex items-center flex-col ms-8">
        <h2 className="main-text-title ms-9 ">
          find pets for <br />
          <span className="main-text-title-span">Adoption</span>
        </h2>
      </div>
      <div className="main-img">
        <img width={"90%"} src={require("../../images/image 9.png")} alt="img" />
      </div>
    </div>
  );
};
export default Main;
