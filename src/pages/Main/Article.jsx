//! ---------------------------------------- Import
import React from "react";
import { FaSearch } from "react-icons/fa";
import articles from "../../data/articles";
import ArticleCard from "../../components/Cards/ArticleCard";
//! ---------------------------------------- Component (Article)
const Article = () => {
  return (
    <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow w-6xl flex flex-col mx-auto text-gray-800 p-5 my-15">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          همه مقالات
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          جدیدترین و کاربردی‌ترین مقالات برنامه‌نویسی را اینجا بخوان
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8 relative">
        <FaSearch className="absolute right-4 top-3.5 text-gray-400" />
        <input
          type="text"
          placeholder="جستجو در مقالات..."
          className="w-full py-3 pr-10 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-h-110 overflow-auto px-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Article;
