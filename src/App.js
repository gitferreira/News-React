import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
  //Category
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consumeAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b1a9537a5584488ca1dfee042d5a052e`;
      const result = await fetch(url);
      const news = await result.json();
      setNews(news.articles);
    };
    consumeAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="News Browser" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList
          news = {news}
        />
      </div>
    </Fragment>
  );
}

export default App;
