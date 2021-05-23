import React from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

function NewsPage({ match }) {
  const category = match.params.category || "all";
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
}

export default NewsPage;
