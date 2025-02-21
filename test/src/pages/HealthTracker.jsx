import React from "react";
import trackerIcon from "../images/HealthTracker.jpg"
import { NavLink } from "react-router";

function HealthTracker() {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${trackerIcon})` }}
      >
        {/* Content */}
        <div className="relative flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-4xl font-bold text-white mb-10">
            Choose Your Workout
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <NavLink to="/body-mass-index">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
                Body Mass Index
              </button>
            </NavLink>
            <NavLink to="/hydration-tracker">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
                Hydration Tracker
              </button>
            </NavLink>
            <NavLink to="/sleep-tracker">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
                Sleep Tracker
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
}

export default HealthTracker
