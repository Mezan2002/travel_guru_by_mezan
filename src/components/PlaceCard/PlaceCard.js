import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  const { cardImage, name, description, id } = place;
  return (
    <div className="">
      <div class="card w-10/12 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64" src={cardImage} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className="text-left">
            {description.length > 250 ? (
              <p>
                {description.slice(0, 250) + "..."}
                <Link to={`/destination/${id}`} className="text-blue-900">
                  read more
                </Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <div class="card-actions justify-end">
            <Link className="w-full" to={`/destination/${id}`}>
              <button class="btn btn-primary btn-block">Buy this</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
