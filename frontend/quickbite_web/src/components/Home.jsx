import { BASE_URL } from "../../src/utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
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
            All Restaurant Menu
          </h1>
          <div className="cardContainer flex flex-wrap justify-between  gap-[30px] font-[700]">
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error if any */}
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => {
                const { _id, name, description, address, menu, reviews } =
                  restaurant; // Destructure the restaurant object

                return (
                  <Link key={_id} to=" ">
                    <div
                      key={_id}
                      className="restaurantCard border border-[#000000] p-[20px]"
                    >
                      <h2>{name}</h2>
                      <p>{description}</p>
                      <p>
                        Address: {address?.street}, {address?.city},{" "}
                        {address?.state}, {address?.country}, {address?.zipCode}
                      </p>
                      <p>Opening Hours: {restaurant.openingHours}</p>
                      <h3>Menu:</h3>
                      <ul>
                        {menu.map((category) => (
                          <li key={category?._id}>
                            <strong>{category?.categoryName}</strong>
                            <ul>
                              {category.items.map((item) => (
                                <li key={item._id}>
                                  {item.itemName} - ${item.price} <br />
                                  <img
                                    src={item.image}
                                    alt={item.itemName}
                                    style={{ width: "100px" }}
                                  />
                                </li> // Assuming each item has a 'name' property
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                      <h3>Reviews:</h3>
                      <ul>
                        {reviews.map((review) => (
                          <li key={review?._id}>
                            <p>
                              {review?.reviewText} - Rating: {review?.rating}
                            </p>
                          </li>
                        ))}
                      </ul>
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
    </>
  );
};

export default Home;
