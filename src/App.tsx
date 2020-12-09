import React from "react";
import "./App.css";
import NavBar from "./Components/AppBar";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/ProductCart";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Route path="/" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
      </Router>
    </div>
  );
}

export default App;
