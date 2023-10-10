import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetails} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
