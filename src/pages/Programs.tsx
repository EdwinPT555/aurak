/* eslint-disable max-len */
import React from "react";

const Programs = () => {
  return (
    <div className="relative">
      <div
        className="bg-fixed bg-cover bg-center h-80"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/7683897/pexels-photo-7683897.jpeg')" }}
      >
        <div className="relative z-10">
          <h1 className="text-6xl font-bold p-48 text-white">Programs</h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-transparent to-black">
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center relative z-10">
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-4">IT'S THE PLACE YOU CAN LEARN AND GROW</h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Programs;