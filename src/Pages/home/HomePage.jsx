import React from "react";
import {Header , Footer} from "../../sections/index";
import SectionsHome from "./SectionsHome";
import JoinSection from "../../components/JoinSection/JoinSection";
const HomePage =()=>{
    return(
        <>
            <Header />
            <SectionsHome />
            <JoinSection />
            <Footer />
        </>
    )
}

export default HomePage;