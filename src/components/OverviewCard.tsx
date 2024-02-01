import React from "react";
import img from "/public/overview.png";
import Image from "next/image";

const OverviewCard = () => {
  return (
    <div className="border rounded-lg p-10 relative my-10 w-8/12 mx-auto bg-gray-50">
      <div className="content w-9/12">
        <h2 className="font-semibold mb-3 text-xl  ">Overview</h2>
        <p className="text-gray-500 font-medium">
          An introduction to the Trudenty-Worldline IEC experience, providing
          detailed demonstrations of the Trudenty solution for merchants, and
          offers a mock up of the resulting consumer experience .
        </p>
        <div className="text-right mt-4">
          <button className="font-bold text-white w-8/12 mr-auto bg-gray-800 p-3 rounded-full">
            Get started
          </button>
        </div>
        <Image
          src={img}
          alt="logo-img"
          width={180}
          height={200}
          layout="fixed"
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default OverviewCard;
