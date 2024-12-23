import { BASE_URL } from "../../src/utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FooterButtom from "./FooterButtom";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  const handleRestaurantData = async () => {
    try {
      const response = await fetch(BASE_URL + "/api/view/restaurants", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error to fetch data");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setRestaurants(data?.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  useEffect(() => {
    handleRestaurantData();
  }, []);
  return (
    <>
      <section className="relative pb-[100px]">
        <div className="container ">
          <h1 className=" pb-[50px] text-center text-3xl">
            All Restaurant 
          </h1>
          <div className="cardContainer flex flex-wrap justify-evenly  gap-[30px] font-[700]">
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error if any */}
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => {
                const { _id, name, description, address } =
                  restaurant; // Destructure the restaurant object

                return (
                  <Link key={_id} to={`/restaurant/${_id}`}>
                    <div
                      key={_id}
                      className="restaurantCard border border-[#000000] p-[20px] rounded-3xl max-w-sm mx-auto  bg-white  shadow-lg"
                    >
                      <h2>{name}</h2>
                      <p>{description}</p>
                      <p>
                        Address: {address?.street}, {address?.city},{" "}
                        {address?.state}, {address?.country}, {address?.zipCode}
                      </p>
                      <p>Opening Hours: {restaurant.openingHours}</p>
                      
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>No restaurants found.</p>
            )}
          </div>
        </div>
      </section>
      <section className="footer bg-[#D9D9D9]">
        <div className="container">
          <Footer />
        </div>
      </section>
      <section className="bg-[#03081F] ">
        <div className="container">
          <FooterButtom/>
        </div>
      </section>
    </>
  );
};

export default Home;
