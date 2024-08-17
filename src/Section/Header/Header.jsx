import React from "react";
import { NavbarBrand , Main } from "../../Compontent/index";
import "./Header.css";

const Header = ()=>{
    return(
        <div className="header">
          <NavbarBrand />
         <header>
           <Main />
        </header>
        </div>
       
    )
}
export default Header;