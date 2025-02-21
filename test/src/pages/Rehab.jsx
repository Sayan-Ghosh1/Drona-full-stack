import React from "react";
import { NavLink } from "react-router";
import rehabIcon from "../images/rehab.jpg"

function RehabExercises() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4 text-center"
      style={{
        backgroundImage:
          `url(${rehabIcon})`,
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-24 text-white">
        Rehab Exercises
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl justify-center items-center">
        <NavLink
          to="/rehab/ankle"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer"
        >
          Ankle
        </NavLink>
        <NavLink
          to="/rehab/lower-leg"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer"
        >
          Lower Leg
        </NavLink>
        <NavLink
          to="/rehab/shoulder"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer"
        >
          Shoulder
        </NavLink>
        <NavLink
          to="/rehab/elbow"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer"
        >
          Elbow
        </NavLink>
        <NavLink
          to="/rehab/knee"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer"
        >
          Knee
        </NavLink>
        <NavLink
          to="/rehab/hip-thigh-groin"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer"
        >
          Hip, Thigh, Groin
        </NavLink>
      </div>
    </div>
  );
}

export default RehabExercises;
