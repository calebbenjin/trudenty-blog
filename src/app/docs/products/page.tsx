"use client";
import React from "react";
import { useState, useEffect } from "react";
import Article from "@/components/Article";
import ArticleList from "@/components/ArticleList";
import Link from "next/link";
import img from "/public/merchant-demo.png";
import imgbg from "/public/img.png";
import imghyoe from "/public/consumer demo.png";
import Image from "next/image";
import img1 from "/public/shopper trust index.png";
import img2 from "/public/payment personalisation.png";
import img3 from "/public/checkout and refund manager.png";
import img4 from "/public/passkey.png";

const articles = [
  { id: "article1", title: "Overview", text: "Content for article 1..." },
];

const OverviewPage = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  const handleArticleClick = (articleId: any) => {
    setActiveArticle(articleId);
    const articleElement = document.getElementById(articleId);

    if (articleElement) {
      articleElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveArticle(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    articles.forEach((article) => {
      const target = document.getElementById(article.id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="flex gap-14">
        <div className="lg:px-20 pb-20 px-0 mx-auto flex-1 overflow-y-auto">
          <div className="w-full">
            <h2 className="text-2xl text-gray-600 font-bold mb-4 mt-10">
              Overview
            </h2>
            <div className="space-y-3">
              <p className="pb-4 text-lg font-medium text-gray-600">
                Based on configurations defined on the platform (as presented in
                Merchant Demo), we demonstrate consumer payments experience (for
                an ecommerce platform) personalised based on risk. For each
                shopper experience, the consumer first establishes their Shopper
                Trust Index using Open Banking, then review their identity
                information and Shopper Trust Index stored in an embedded
                identity wallet, and finally proceed through the checkout and
                return flows as predefined for their consumer risk score.
              </p>
              <h2 className="text-xl font-bold mb-4 pt-8">Consumer profiles</h2>
              <p className=" pb-4 text-lg font-medium text-gray-600">
                To initiate the consumer demo, choose an experience to test
                shopping scenarios for a Trusted, Medium risk, or High risk
                shopper as configured in the Merchant demo.
              </p>
            </div>
            <div>
              <Image
                src={imgbg}
                alt="logo-img"
                width={800}
                height={700}
                layout="fixed"
                className="mx-auto mt-6"
              />
            </div>
          </div>
          <section className="mt-20">
            <h2 className="text-2xl text-gray-600 font-bold mb-4 mt-10">
              Up next
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="border w-full rounded-lg lg:p-10 p-5 pb-20 relative mx-auto bg-gray-50">
                <div className="content lg:w-9/12 w-11/12">
                  <h2 className="font-semibold mb-3 text-xl  ">
                    Shopper Trust Index
                  </h2>
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
              <div className="border w-full rounded-lg lg:p-10 p-5 pb-20 relative mx-auto bg-gray-50">
                <div className="content lg:w-9/12 w-11/12">
                  <h2 className="font-semibold mb-3 text-xl  ">
                    Payment Personalisation
                  </h2>
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
              <div className="border w-full rounded-lg lg:p-10 p-5 pb-28 relative mx-auto bg-gray-50">
                <div className="content lg:w-9/12 w-11/12">
                  <h2 className="font-semibold mb-3 text-xl  ">
                    Returns Orchestrator
                  </h2>
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
            </div>
          </section>
        </div>
        <ArticleList
          articles={articles}
          activeArticle={activeArticle}
          onArticleClick={handleArticleClick}
        />
      </div>
    </div>
  );
};

export default OverviewPage;
