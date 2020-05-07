import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Route 
            exact
            path="/"
            component={About} 
          />
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <Route
            exact
            path="/portfolio"
            component={Portfolio}
          />
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
