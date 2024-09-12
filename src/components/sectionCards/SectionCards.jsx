import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import axios from "axios";
import PetType from "../PetType/PetType";

const SectionCards = (props) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showData = cards.map((item, index) => (
    <Card
      key={index}
      id={item._id}
      imageUrl={item.imageUrl[0]}
      color={item.color}
      age={item.age}
      breed={item.breed}
      gender={item.gender}
      city={item.city}
    />
  ));

  const typeRef = useRef(props.type);

  useEffect(() => {
    let type = typeRef.current;
    const fetchCards = async () => {
      let endPoint;
      switch (type) {
        case "Cat":
          endPoint = `pets?type=Cat&limit=5`;
          break;
        case "Dog":
          endPoint = `pets?type=Dog&limit=5`;
          break;
        case "New":
          endPoint = `pets?limit=5&sort=-dateAdded`;
          break;
        default:
          endPoint = "pets?limit=5";
          break;
      }

      try {
        const response = await axios.get(`${endPoint}`);
        setCards(response.data.data.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("error", err.message);
        }
        console.log(err.config);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, [typeRef]);

  return (
    <>
      <section className="component w-full my-14 mx-0 h-fit">
        <div className="container w-[91%] m-auto flex justify-center flex-col overflow-x-hidden">
          <PetType {...props} />
          <div className="cards h-fit mt-14 mb-10 flex items-center">
            {isLoading ? (
              <div className="w-full h-[300px] my-[10px] flex justify-center items-center">
                <Loading />
              </div>
            ) : cards.length === 0 ? (
              <div className="w-full h-[300px] my-[10px] flex justify-center items-center">
                <Loading />
              </div>
            ) : (
              showData
            )}
          </div>
          <div className="btn w-full mt-6 flex justify-center">
            <Link
              to={`/all-cards?type=${props.type}`}
              className="w-36 py-3 flex justify-center items-center bg-primary text-white">
              Show more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCards;
