import React from "react";
import Banner from "../../assets/apple-logo-banner.png";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./homePage.css";

export default function HomePage({ articles }) {
  return (
    <div className="homePage">
      <img
        src={Banner}
        alt="banner"
        width="100%"
        style={{ pointerEvents: "none" }}
      />
      <div className="articleCards">
        {articles.map((article, i) => (
          <ArticleCard article={article} key={i} />
        ))}
      </div>
    </div>
  );
}
