import React ,{useEffect} from "react";
import "./Main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; //import aos styles
import header from "../../images/header/header.png";

const Main = () => {
  useEffect(() => {
    AOS.init(); //Initialize AOS
  }, []);
  return (
    <div className="main w-full flex justify-between items-center">
      <div className="main-text flex items-center flex-col ms-8">
        <h2 className="main-text-title ms-9 text-[70px] font-medium font-montaguSlab" data-aos="fade-up-right">
          find pets for <br />
          <span className="main-text-title-span text-primary">Adoption</span>
        </h2>
      </div>
      <div className="main-img mt-9">
        <img width={"100%"} src={header} alt="img" data-aos="zoom-in"/>
      </div>
    </div>
  );
};
export default Main;
