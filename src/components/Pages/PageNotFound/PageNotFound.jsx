import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <>
      <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/">Go Back Home</a>
      </div>
    </>
  );
};

export default PageNotFound;
