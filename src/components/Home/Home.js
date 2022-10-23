import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg"
          className=" rounded-lg shadow-2xl w-6/12"
          alt=""
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold">Take a Tour</h1>
          <p className="py-6">
            Travel is the movement of people between distant geographical
            locations. Travel can be done by foot, bicycle, automobile, train,
            boat, bus, airplane, ship or other means, with or without luggage,
            and can be one way or round trip.Travel can also include relatively
            short stays between successive movements, as in the case of tourism.
          </p>
          <Link to="/destination">
            <button className="btn btn-primary">Show Destinations</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
