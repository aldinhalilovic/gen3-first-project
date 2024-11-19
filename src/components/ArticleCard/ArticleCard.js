import React from "react";
import "./articleCard.css";
import { formatDate } from "../../utils";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <div className="articleCardImage">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt="articleImg"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        ) : (
          <img
            src={article.urlToImage}
            alt="articleImg"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}
      </div>
      <div className="articleCardContent">
        <h1>
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            {article.title}
          </a>
        </h1>
        <p>
          {article.description.length > 170
            ? `${article.description.substring(0, 167)}...`
            : article.description}
        </p>
        <p>{formatDate(article.publishedAt)}</p>
      </div>
    </div>
  );
}
