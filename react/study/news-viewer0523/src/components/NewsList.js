import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePromise from "../lib/usePromise";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList({ category }) {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb7f2c87059e431aac872c465d1287bd`
    );
  }, [category]);

  if (loading) {
    return (
      <NewsListBlock>
        <img
          src={"https://t1.daumcdn.net/cfile/tistory/9929FC505B3D978002"}
          alt="loading img"
        />
      </NewsListBlock>
    );
  }
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
