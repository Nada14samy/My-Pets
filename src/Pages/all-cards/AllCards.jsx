import AllAnimals from "../../components/allAnimals/AllAnimals";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Cats_image from "../../images/section-cards/cats.png";
const AllCards = () => {
  return (
    <>
      <Header />
      <AllAnimals type={"Cat"} logo={Cats_image} />
      <Footer />
    </>
  );
};

export default AllCards;
