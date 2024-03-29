import React, { lazy, Suspense } from "react";
import "./App.css";
const Header = lazy(() => import("./components/header/Header"));
const Categories = lazy(() => import("./features/categoris/Categories"));
const Home = lazy(() => import("./features/home/Home"));
const PopularSubreddits = lazy(() =>
  import("./features/popularSubreddits/PopularSubreddits"),
);

function App() {
  return (
    <Suspense fallback="">
      <Header />
      <div className="content main-content">
        <aside className="aside-left">
          <PopularSubreddits />
        </aside>
        <main>
          <Home />
        </main>
        <aside className="aside-right">
          <Categories />
        </aside>
      </div>
    </Suspense>
  );
}

export default App;
