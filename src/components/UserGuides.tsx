import React from "react";
import img from "/public/merchant-demo.png";
import imghyoe from "/public/consumer demo.png";
import Image from "next/image";

const UserGuides = () => {
  return (
    <div className="lg:w-8/12 w-10/12 mx-auto mt-20">
      <h2 className="font-bold mb-2 mt-9">User Guides</h2>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="border rounded-lg lg:pt-10 pt-4 lg:pr-10 pr-4 lg:pl-10 pl-4 relative w-full mx-auto ">
          <h2 className="font-semibold mb-3 lg:text-xl text-lg ">
            Merchant Demo
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Customize fraud risk algorithms, personalize payment experiences and
            leverage the dashboard for automated and supported refund
            decision-making.
          </p>
          <Image
            src={img}
            alt="logo-img"
            width={400}
            height={400}
            layout="fixed"
            className="mx-auto mt-12"
          />
        </div>
        <div className="border rounded-lg lg:pt-10 pt-4 lg:pr-10 pr-4 lg:pl-10 pl-4 relative w-full mx-auto ">
          <h2 className="font-semibold mb-3 lg:text-xl text-lg ">
            Consumer Demo
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Experience personalized consumer payment experiences tailored to
            risk, as set up by the Merchant Demo.
          </p>
          <Image
            src={imghyoe}
            alt="logo-img"
            width={400}
            height={400}
            layout="fixed"
            className="mx-auto mt-12"
          />
        </div>
      </section>
    </div>
  );
};

export default UserGuides;
