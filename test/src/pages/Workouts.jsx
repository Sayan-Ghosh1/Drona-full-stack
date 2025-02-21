import React from "react";
import { NavLink } from "react-router";
import workoutsPic from "../images/workouts.jpg";

function Workout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${workoutsPic})` }}
    >
      {/* Content */}
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-10">
          Choose Your Workout
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <NavLink to="/with-equipment">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
              With Equipment
            </button>
          </NavLink>
          <NavLink to="/without-equipment">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
              Without Equipment
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Workout;
