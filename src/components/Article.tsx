// src/components/Article.js
import Link from "next/link";
import React from "react";
import img from "/public/merchant-demo.png";
import imghyoe from "/public/consumer demo.png";
import Image from "next/image";

const Article = ({ article }: any) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl text-gray-600 font-bold mb-4 mt-10">
        Overview
      </h2>
      <div className="space-y-3">
        <p className="pb-4 text-lg font-medium text-gray-600">
          The Trudenty Trust Network is a decentralised network of consumer
          fraud risk profiles, enabling merchants to embed consumer fraud risk
          intelligence into consumer payments routings. Use this guide as a
          high-level summary, covering use cases, products, and engaging demos,
          along with links to explore more documentation for each area.
        </p>
        <h2 className="text-xl font-bold mb-4 pt-8">Demo</h2>
        <h2 className="text-lg text-gray-700 font-bold mt-4">Merchant Demo</h2>
        <p className=" pb-4 text-lg font-medium text-gray-600">
          The demo is organised around the Trudenty platform, where merchants
          tailor fraud risk algorithms, personalise payments experiences based
          on consumer fraud risk and use the operational dashboard for automated
          and assisted refund decision-making.
        </p>
        <Link
          href="/"
          className="text-md underline text-gray-600 font-bold mb-4">
          Learn more
        </Link>

        <div className="py-6 mt-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Consumer Demo
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Based on configurations defined on the platform (as presented in
            Merchant Demo), we demonstrate consumer payments experience (for an
            ecommerce platform) personalised based on risk.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>

        <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="border rounded-lg lg:pt-6 pt-4 lg:pr-0 pr-4 lg:pl-6 pl-4 relative w-full mx-auto ">
            <h2 className="font-semibold mb-3 lg:text-xl text-lg ">
              Merchant Demo
            </h2>
            <Image
              src={img}
              alt="logo-img"
              width={400}
              height={400}
              layout="fixed"
              className="mx-auto mt-6"
            />
          </div>
          <div className="border rounded-lg lg:pt-6 pt-4 lg:pr-0 pr-4 lg:pl-6 pl-4 relative w-full mx-auto ">
            <h2 className="font-semibold mb-3 lg:text-xl text-lg ">
              Consumer Demo
            </h2>
            <Image
              src={imghyoe}
              alt="logo-img"
              width={400}
              height={400}
              layout="fixed"
              className="mx-auto mt-6"
            />
          </div>
        </section>
      </div>

      <div className="space-y-3 mt-20">
        <h2 className="text-xl font-bold mb-4 pt-8">Use cases</h2>
        <h2 className="text-lg text-gray-700 font-bold mt-4">
          Embed fraud risk intelligence
        </h2>
        <p className=" pb-4 text-lg font-medium text-gray-600">
          Integrate Shopper Trust Index, a 360-degree consumer fraud risk score,
          that empowers merchants with advanced consumer experiences and real
          time fraud prevention measures.
        </p>
        <Link
          href="/"
          className="text-md underline text-gray-600 font-bold mb-4">
          Learn more
        </Link>

        <div className="py-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Personalise payments
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Enhance checkout and refunds experience by tailoring payment
            routings based on each users risk profile, seamlessly integrated
            into your existing payment setup.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>

        <div className="py-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Automated and assisted refund decisioning
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Speed up refund operations by incorporating predefined settings and
            assisted decision-making capabilities, guided by the Shopper Trust
            Index.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>
        <div className="py-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Secure consumer accounts
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Ensure secure consumer accounts by utilizing passkeys for accessing
            and creating consumer accounts.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>
      </div>

      <div className="space-y-3 mt-20">
        <h2 className="text-xl font-bold mb-4 pt-8">Products</h2>
        <h2 className="text-lg text-gray-700 font-bold mt-4">
          Shopper Trust Index
        </h2>
        <p className=" pb-4 text-lg font-medium text-gray-600">
          A fraud risk score for new and returning shoppers, to differentiate
          trusted shoppers from high-risk shoppers.
        </p>
        <Link
          href="/"
          className="text-md underline text-gray-600 font-bold mb-4">
          Learn more
        </Link>

        <div className="py-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Payment Personalisation
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Automatically personalise routing for payments based on consumer
            fraud risk profile, at checkout and refunds.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>

        <div className="py-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Returns Orchestrator
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Automatically personalise routing for payments based on consumer
            fraud risk profile, at checkout and refunds.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>
        <div className="py-6">
          <h2 className="text-lg text-gray-700 font-bold mt-4">
            Identity and Authentication
          </h2>
          <p className="pt-2 text-lg pb-4 font-medium text-gray-600">
            Secure consumer accounts from login to returns, with streamlined
            passkeys linked directly to your web domain.
          </p>
          <Link
            href="/"
            className="text-md underline text-gray-600 font-bold mb-4">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
