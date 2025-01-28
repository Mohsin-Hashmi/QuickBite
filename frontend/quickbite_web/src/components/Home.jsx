import { BASE_URL } from "../../src/utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FooterButtom from "./FooterButtom";
import axios from "axios";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  const handleRestaurantData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/view/restaurants`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.token);
        setRestaurants(response?.data?.data);
      } else {
        setError(response?.data?.message);
      }
    } catch (err) {
      err.Error(err.response?.data?.message || err.message);
    }
  };
  useEffect(() => {
    handleRestaurantData();
  }, []);
  return (
    <>
      <section className="relative pb-[100px] ">
        <div className="container">
          <h1 className=" pb-[50px] text-center text-3xl">All Restaurant</h1>
          <div className="cardContainer flex flex-wrap justify-evenly  gap-[30px] font-[700]">
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error if any */}
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => {
                const { _id, image, name, description, address } = restaurant; // Destructure the restaurant object

                return (
                  <Link key={_id} to={`/restaurant/${_id}`}>
                    <div
                      key={_id}
                      className="restaurantCard border-2 hover:border-[#FFA500] p-[20px] rounded-3xl max-w-sm mx-auto  bg-white  shadow-lg"
                    >
                      <img
                        className="w-full"
                        src={image}
                        alt="restaurnat image"
                      />
                      <h2 className="text-center text-[25px] font-[700] mt-[12px]">
                        {name}
                      </h2>
                      <p className="font-[500] mt-[8px]">{description}</p>
                      <p className="font-[500] mt-[8px]">
                        Address: {address?.street}, {address?.city},{" "}
                        {address?.state}, {address?.country}, {address?.zipCode}
                      </p>
                      on
                      <p className="font-[500] mt-[10px]">
                        Opening Hours: {restaurant.openingHours}
                      </p>
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
          <FooterButtom />
        </div>
      </section>
    </>
  );
};

export default Home;
