import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header Component
 * [cite_start]Reference: EP-4.pdf (Page 4) [cite: 664-680]
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

/**
 * Config Driven UI (Mock Data)
 * Note: Video mein data structure "data" key ke andar tha.
 * Maine yahan 'info' hata kar wapas 'data' kar diya hai taaki
 * yeh EXACT video jaisa code ban jaye.
 */
const resList = [
  {
    data: {
      id: "24417",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      deliveryTime: 30,
      costForTwo: "₹400 for two",
    },
  },
  {
    data: {
      id: "12345",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      avgRating: 4.5,
      deliveryTime: 25,
      costForTwo: "₹350 for two",
    },
  },
  {
    data: {
      id: "78901",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      cuisines: ["Burgers", "Biryani", "American", "Snacks"],
      avgRating: 3.8,
      deliveryTime: 40,
      costForTwo: "₹500 for two",
    },
  },
];

/**
 * RestaurantCard Component
 * Reference: EP-4.pdf (Page 7)
 * [cite_start]Yahan ab hum '.data' use kar rahe hain jo EXACT video mein hai. [cite: 738]
 */
const RestaurantCard = (props) => {
  const { resData } = props;

  // Video mein yehi line thi: resData?.data
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data; 

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

/**
 * Body Component
 * [cite_start]Reference: EP-4.pdf (Page 9) [cite: 794-796]
 */
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);