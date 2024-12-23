import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

const RestaurantDetails = () => {
  const { id } = useParams(); // Get restaurant ID from the route
  const [restaurant, setRestaurant] = useState(); // Restaurant data state
  const [error, setError] = useState(); // Error state

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/view/restaurants/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Error fetching restaurant details"
          );
        }

        const data = await response.json();
        setRestaurant(data?.restaurant); // Set restaurant data
      } catch (err) {
        console.error(err);
        setError(err.message); // Set error message
      }
    };

    fetchRestaurantData();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error message
  }
  console.log(restaurant);
  if (!restaurant) {
    return <p>Loading...</p>; // Display loading state
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="mt-2">{restaurant.description}</p>
      <p className="mt-2">
        Address: {restaurant.address.street}, {restaurant.address.city},
        {restaurant.address.state}, {restaurant.address.country},
        {restaurant.address.zipCode}
      </p>
      <p className="mt-2">Opening Hours: {restaurant.openingHours}</p>
      <img
        className="w-full h-64 object-cover mt-4 rounded-lg"
        src={restaurant.image}
        alt={restaurant.name}
      />

      <h2 className="text-2xl mt-6 font-semibold">Menu</h2>
      {restaurant.menu.length > 0 ? (
        restaurant.menu.map((category, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-xl font-medium">{category.categoryName}</h3>
            <ul className="list-disc pl-5 mt-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <strong>{item.itemName}</strong> - ${item.price}
                  <p className="text-gray-500">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No menu items available</p>
      )}

      <h2 className="text-2xl mt-6 font-semibold">Reviews</h2>
      {restaurant.reviews.length > 0 ? (
        restaurant.reviews.map((review, index) => (
          <div key={index} className="mt-4">
            <p>
              <strong>User:</strong> {review.userId}
            </p>
            <p>
              <strong>Rating:</strong> {review.rating}/5
            </p>
            <p>
              <strong>Review:</strong> {review.reviewText}
            </p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default RestaurantDetails;
