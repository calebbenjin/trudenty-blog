import React from "react";

const HeroSection = () => {
  return (
    <div className=" lg:h-[40vh] h-[30vh] flex items-center justify-center bg-gray-50">
      <div className="lg:w-8/12 w-12/12 mx-auto text-center">
        <h1 className="font-bold lg:text-5xl text-3xl text-center text-zinc-900 ">
          Trudenty Demo Guide
        </h1>
        <p className="lg:px-60 px-10 mx-auto font-semibold text-gray-500 lg:mt-8 mt-4">
          Explore the use cases and the product capabilities of the Trudenty
          Trust Network and related products.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
