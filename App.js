import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCagRLYkLeTBEd0qc-6FLb6lnyxJXaBw_Fw&s" />
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

const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "24417",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/181ed303-fca5-4d33-879f-b7e30e40bb28_24417.JPG",
      "locality": "NIBM road",
      "areaName": "Kondhwa",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "2456",
      "avgRatingString": "4.2",
      "totalRatingsString": "13K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-03-25 02:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹799"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9c6579f9-cf97-4093-aee6-c95e1b36ebb1"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/dominos-pizza-nibm-road-kondhwa-rest24417",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }

const RestaurantCard = (props) => {
    const {resData} = props;
    
    return (
        <div className="res-card" style={{ backgroundColor: "lightgray" }}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src="https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2Fburgerkingrebrand.jpg&h=630&w=1200&q=75&v=20170226&c=1"/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>{resData.avgRating} stars </h4>
            
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resData}/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
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