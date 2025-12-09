import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          // Video mein key ke liye 'restaurant.data.id' use hua tha
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body 