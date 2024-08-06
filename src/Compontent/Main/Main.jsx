import React from "react";
import "./Main.scss";

const Main = () => {
    return (
        <div className="main">
            <div className="main-text">
                <h2 className="main-text-title">
                    find pets for <br />
                    <span className="main-text-title-span">Adoption</span>
                </h2>
            </div>
            <div className="main-img">
                <img width={"90%"} src={require("../../image/image 9.png")} alt="img" />
            </div>
        </div>
    )
}
export default Main;