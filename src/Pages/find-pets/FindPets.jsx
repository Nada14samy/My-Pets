import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionCards from "../../components/sectionCards/SectionCards";
import JoinSection from "../../components/JoinSection/JoinSection";
import Cats_image from "../../images/section-cards/cats.png";
import Dogs_image from "../../images/section-cards/dogs.png";
import New_image from "../../images/section-cards/new.png";
const FindPets = ()=>{
    return(
        <>
            <Header />
            <SectionCards type={"Cat"} logo={Cats_image} />
            <SectionCards type={"Dog"} logo={Dogs_image} />
            <SectionCards type={"New"} logo={New_image} />
            <JoinSection />
            <Footer />
        </>
    )
}

export default FindPets;