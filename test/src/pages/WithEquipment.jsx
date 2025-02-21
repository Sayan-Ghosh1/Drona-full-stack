import React from "react";
import { NavLink } from "react-router";
import workoutsPic from "../images/workouts.jpg";


function WithEquipment() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
    style={{ backgroundImage: `url(${workoutsPic})` }}>
      <h1 className="text-4xl font-bold mb-10 text-white">
        Select a Muscle Group (With Equipment)
      </h1>
      <div className="flex flex-row gap-4 items-center ">
        <NavLink to="/maintenance">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
            Arms
          </button>
        </NavLink>
        <NavLink to="/maintenance">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
            Chest
          </button>
        </NavLink>
        <NavLink to="/maintenance">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
            Shoulder &amp; Back
          </button>
        </NavLink>
        <NavLink to="/maintenance">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
            Abs
          </button>
        </NavLink>
        <NavLink to="/maintenance">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">
            Legs
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default WithEquipment;