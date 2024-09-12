import React from "react";
import bg_sections from "../../images/section-cards/bg-section.png";
function PetType({ logo, type }) {
  return (
    <div
      className="title-head h-[90px] flex justify-start items-center bg-contain bg-left bg-no-repeat mx-3"
      style={{ backgroundImage: `url(${bg_sections})` }}>
      <img className="w-14" src={logo} alt="" />
      <h3 className="text-3xl ml-2">{type}s</h3>
    </div>
  );
}

export default PetType;
