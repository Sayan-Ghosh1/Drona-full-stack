import React from "react";

function Features() {
    const features = [
        { title: "Workouts", desc: "Customized workout routines to match your fitness level." },
        { title: "Nutrition", desc: "Personalized meal plans for optimal health and performance." },
        { title: "Health Tracking", desc: "Monitor progress with smart tracking tools." },
        { title: "Sports Training", desc: "Sport-specific training to boost performance." }
      ];
      return (
        <section className="py-12 bg-gray-100 text-center">
          <h3 className="text-3xl font-bold">Our Features</h3>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="mt-2 text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Features