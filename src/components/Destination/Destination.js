import React from "react";
import { useLoaderData } from "react-router-dom";
import PlaceCard from "../PlaceCard/PlaceCard";

const Destination = () => {
  const places = useLoaderData();
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl mt-10 font-semibold">
        All Destinations ({places.length})
      </h1>
      <div className="grid grid-cols-3 gap-5 container mx-auto py-20">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place}></PlaceCard>
        ))}
      </div>
    </div>
  );
};

export default Destination;
