import React from "react";


const Hero = () => {
    return (
      <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{backgroundImage: 'url(https://source.unsplash.com/featured/?fitness)'}}>
        <div>
          <h2 className="text-4xl font-bold">Achieve Your Fitness Goals</h2>
          <p className="mt-2">Personalized workouts, nutrition plans, and expert guidance.</p>
          <button className="mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded">Get Started</button>
        </div>
      </section>
    );
  };

export default Hero