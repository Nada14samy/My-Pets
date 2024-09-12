import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import PetType from "../PetType/PetType";
import Cats_image from "../../images/section-cards/cats.png";

function AllAnimals() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // For pagination

  // States for filters
  const [selectedType, setSelectedType] = useState("Cat");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const location = useLocation();
  const apiUrl = process.env.REACT_APP_API_URL;

  // Extract the pet type (Cat/Dog) from the URL query parameter
  const getTypeFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get("type") || "Cat"; // Default to "Cat" if no type is specified
  };

  const petType = getTypeFromQuery();

  // Fetch cards with filters
  const fetchCards = async (pageNum = 1, append = false) => {
    setIsLoading(true); // Start loading
    try {
      let query = `${apiUrl}pets?type=${selectedType}&page=${pageNum}&limit=10`;

      // Append filters to the query string
      if (selectedGender) query += `&gender=${selectedGender}`;
      if (selectedAge) query += `&age=${selectedAge}`;
      if (selectedCity) query += `&city=${selectedCity}`;

      const response = await axios.get(query);
      const newCards = response.data.data.data;

      // If less data than the limit is returned, we know there's no more data to load
      if (newCards.length < 10) setHasMore(false);

      // Reset cards if not appending (i.e., new filter or first load)
      setCards((prevCards) =>
        append ? [...prevCards, ...newCards] : newCards
      );
    } catch (err) {
      console.error("Error fetching cards:", err);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Fetch initial data on component mount or when filters change
  useEffect(() => {
    // Reset page to 1 when filters change
    setPage(1);
    setHasMore(true); // Reset to allow more pagination
    fetchCards(1, false); // Fetch new cards without appending
  }, [selectedType, selectedGender, selectedAge, selectedCity]);

  // Load more cards for pagination
  const loadMoreCards = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCards(nextPage, true); // Append new cards to the existing ones
  };

  return (
    <div>
      <div className="container w-full my-14 mx-14 h-fit">
        <PetType type={petType} logo={Cats_image} />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Filter Section */}
        <div className="filters mt-6 mb-12 flex justify-around items-center w-full">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-gray-200 p-2 rounded">
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>

          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="bg-gray-200 p-2 rounded">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
            className="bg-gray-200 p-2 rounded">
            <option value="">Age</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
          </select>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-gray-200 p-2 rounded">
            <option value="">City</option>
            <option value="Cairo">Cairo</option>
            <option value="Petville">Petville</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        {/* Show loading spinner while fetching data */}
        {isLoading && (
          <div className="w-full flex justify-center items-center my-10">
            <Loading />
          </div>
        )}

        {/* Display all cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
          {cards.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              imageUrl={item.imageUrl[0]}
              color={item.color}
              age={item.age}
              breed={item.breed}
              gender={item.gender}
              city={item.city}
            />
          ))}
        </div>

        {/* Show "Load more" button if there are more cards to load */}
        {hasMore && !isLoading && (
          <div className="mt-10">
            <button
              onClick={loadMoreCards}
              className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none">
              Show more
            </button>
          </div>
        )}

        {/* Message if no more cards to show */}
        {!hasMore && (
          <div className="text-center mt-10 mb-10">
            <p className="text-xl text-gray-500">
              No more {selectedType}s available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllAnimals;
