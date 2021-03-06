import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
