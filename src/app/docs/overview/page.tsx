"use client";
import React from "react";
import { useState, useEffect } from "react";
import Article from "@/components/Article";
import ArticleList from "@/components/ArticleList";

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
          {/* {articles.map((article) => (
            <Article key={article.id} article={article} />
            ))} */}
          <Article />
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
