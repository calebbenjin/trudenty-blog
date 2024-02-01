import React from "react";
import img from "/public/overview.png";
import Image from "next/image";
import Link from "next/link";

const OverviewCard = () => {
  return (
    <div className="border rounded-lg lg:p-10 p-4 overflow-hidden pb-40 relative my-10 lg:w-8/12 w-10/12 mx-auto bg-gray-50">
      <div className="content lg:w-9/12 w-full">
        <h2 className="font-semibold mb-3 text-xl  ">Overview</h2>
        <p className="text-gray-500 font-medium">
          An introduction to the Trudenty-Worldline IEC experience, providing
          detailed demonstrations of the Trudenty solution for merchants, and
          offers a mock up of the resulting consumer experience .
        </p>
        <div className="text-right mt-4">
          <Link href="/docs/overview">
            <button className="font-bold text-white lg:w-8/12 w-full mr-auto bg-gray-800 p-3 rounded-full">
              Get started
            </button>
          </Link>
        </div>
        <Image
          src={img}
          alt="logo-img"
          width={180}
          height={200}
          layout="fixed"
          className="absolute right-0 lg:bottom-0 bottom-[-2rem] w-40 h-40"
        />
      </div>
    </div>
  );
};

export default OverviewCard;
