import React from "react";
import iconImg from "/public/Group 1321314142.svg";
import Icon from "/public/icon.svg";
import Icon1 from "/public/icon-1.svg";
import Icon2 from "/public/auth.svg";
import Image from "next/image";

const Usecase = () => {
  return (
    <div className="lg:w-8/12 w-10/12 mx-auto mt-20 mb-10">
      <h2 className="font-bold mb-2 mt-9 text-lg">Use cases</h2>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="border rounded-lg lg:p-10 p-5 relative w-full mx-auto ">
          <Image
            src={iconImg}
            alt="logo-img"
            width={40}
            height={40}
            layout="fixed"
            className="mr-auto mb-4 "
          />
          <h2 className="font-semibold mb-3 text-lg  ">
            Embed fraud risk intelligence
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Integrate Shopper Trust Index, a 360-degree consumer fraud risk
            score, that empowers merchants with advanced consumer experiences
            and real time fraud prevention measures.
          </p>
        </div>
        <div className="border rounded-lg lg:p-10 p-5 relative w-full mx-auto ">
          <Image
            src={Icon}
            alt="logo-img"
            width={40}
            height={40}
            layout="fixed"
            className="mr-auto mb-4 "
          />
          <h2 className="font-semibold mb-3 text-lg  ">Personalise payments</h2>
          <p className="text-gray-400 text-sm font-medium">
            Enhance checkout and refunds experience by tailoring payment
            routings based on each user&apos;s risk profile, seamlessly
            integrated into your existing payment setup. Not Trusted Experience
          </p>
        </div>
        <div className="border rounded-lg lg:p-10 p-5 relative w-full mx-auto ">
          <Image
            src={Icon1}
            alt="logo-img"
            width={40}
            height={40}
            layout="fixed"
            className="mr-auto mb-4 "
          />
          <h2 className="font-semibold mb-3 text-lg  ">
            Automated and assisted refund decisioning
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Speed up refund operations by incorporating predefined settings and
            assisted decision-making capabilities, guided by the Shopper Trust
            Index. Not Trusted Experience
          </p>
        </div>
        <div className="border rounded-lg lg:p-10 p-5 relative w-full mx-auto ">
          <Image
            src={Icon2}
            alt="logo-img"
            width={40}
            height={40}
            layout="fixed"
            className="mr-auto mb-4 "
          />
          <h2 className="font-semibold mb-3 text-lg  ">
            Secure consumer accounts
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Ensure secure consumer accounts by utilizing passkeys for accessing
            and creating consumer accounts. Not Trusted Experience
          </p>
        </div>
      </section>
    </div>
  );
};

export default Usecase;
