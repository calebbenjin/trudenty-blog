import React from "react";
import img1 from "/public/shopper trust index.png";
import img2 from "/public/payment personalisation.png";
import img3 from "/public/checkout and refund manager.png";
import img4 from "/public/passkey.png";
import Image from "next/image";

const Products = () => {
  return (
    <section className="mt-10 mb-20 lg:w-8/12 w-10/12 mx-auto">
      <h2 className="font-bold mb-2 mt-9 text-lg">Use cases</h2>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <div className="border rounded-lg lg:p-10 p-5 pb-20 relative mx-auto bg-gray-50">
          <div className="content lg:w-9/12 w-11/12">
            <h2 className="font-semibold mb-3 text-xl  ">
              Shopper Trust Index
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              A fraud risk score for new and returning shoppers, to
              differentiate trusted shoppers from high-risk shoppers.
            </p>
            <Image
              src={img1}
              alt="logo-img"
              width={150}
              height={200}
              layout="fixed"
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div className="border rounded-lg lg:p-10 p-5 pb-20 relative mx-auto bg-gray-50">
          <div className="content lg:w-9/12 w-11/12">
            <h2 className="font-semibold mb-3 text-xl  ">
              Payment Personalisation
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Automatically personalise routing for payments based on consumer
              fraud risk profile, at checkout and refunds.
            </p>
            <Image
              src={img2}
              alt="logo-img"
              width={150}
              height={200}
              layout="fixed"
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div className="border rounded-lg lg:p-10 p-5 pb-28 relative mx-auto bg-gray-50">
          <div className="content lg:w-9/12 w-11/12">
            <h2 className="font-semibold mb-3 text-xl  ">
              Returns Orchestrator
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Automatically personalise routing for payments based on consumer
              fraud risk profile, at checkout and refunds. Includes Shopper
              Trust Index Configuration Shopper Trust Index Shopper Trust
              Network Search Edit Settings
            </p>
            <Image
              src={img3}
              alt="logo-img"
              width={150}
              height={200}
              layout="fixed"
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div className="border rounded-lg lg:p-10 p-5 pb-20 relative mx-auto bg-gray-50">
          <div className="content lg:w-9/12 w-11/12">
            <h2 className="font-semibold mb-3 text-xl  ">
              Identity and Authentication
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Secure consumer accounts from login to returns, with streamlined
              passkeys linked directly to your web domain. Includes Shopper
              Trust Index Configuration Shopper Trust Index Shopper Trust
              Network Search Edit Settings
            </p>
            <Image
              src={img4}
              alt="logo-img"
              width={150}
              height={200}
              layout="fixed"
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;
