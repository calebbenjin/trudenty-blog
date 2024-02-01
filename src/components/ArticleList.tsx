// src/components/ArticleList.js
import React from "react";

const ArticleList = ({ articles, activeArticle, onArticleClick }: any) => {
  return (
    <nav className="relative w-2/12 lg:block hidden">
      <ul className="sticky top-10 space-y-4">
        <p className="text-sm pl-4 font-medium text-gray-600">On this site</p>
        {articles.map((article: any) => (
          <li
            key={article.id}
            className={` pl-4 cursor-pointer text-zinc-400 ${
              activeArticle === article.id
                ? "text-zinc-900 font-semibold border-l border-zinc-800"
                : ""
            }`}
            onClick={() => onArticleClick(article.id)}
          >
            {article.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArticleList;
