import React from "react";
import yogaIcon from "../images/Yoga.jpg";

export default function Yoga() {
  return (
    <div className="h-screen w-screen bg-gray-800 flex justify-center items-center max-w-full">
      <img
        src={yogaIcon}
        alt="Yoga Icon"
        className="w-full max-w-4xl shadow-2xl rounded-lg"
      />
    </div>
  );
}
