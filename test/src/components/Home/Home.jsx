import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="min-h-screen bg-gray-800 flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white">Achieve Your Fitness Goals</h1>
        <p className="text-lg text-gray-200">
          Personalized workouts, nutrition plans, and expert guidance.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
  </main>
);
}
