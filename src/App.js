import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Categories from "./features/categoris/Categories";
import Home from "./features/home/Home";
import PopularSubreddits from "./features/popularSubreddits/PopularSubreddits";

function App() {
  return (
    <>
      <Header />
      <aside className="aside-left">
        <PopularSubreddits />
      </aside>
      <main>
        <Home />
      </main>
      <aside className="aside-right">
        <Categories />
      </aside>
    </>
  );
}

export default App;
