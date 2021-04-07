import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./features/home/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
