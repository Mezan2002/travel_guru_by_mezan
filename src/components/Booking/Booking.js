import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Booking = () => {
  const bookingDestination = useLoaderData();
  const { name, description, bannerImage } = bookingDestination;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("${bannerImage}")`,
          }}
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white w-1/2">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your origin city"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">To</span>
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Start Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booking;
