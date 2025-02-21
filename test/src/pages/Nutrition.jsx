import React from "react";
import { NavLink } from "react-router";
import nutritionPic from "../images/nutrition.jpg"

function Nutrition() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4 text-center" style={{ backgroundImage: `url(${nutritionPic})` }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-white">Nutrition</h1>
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-md md:max-w-3xl justify-center items-center">

                <NavLink to="#" className= "bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">Sports Based Plan</NavLink>


                <NavLink to="#" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">Age Based Plan</NavLink>


                <NavLink to="#" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300 hover:scale-105 cursor-pointer">Lifestyle Based Plan</NavLink>
            </div>
        </div>
    );
}

export default Nutrition