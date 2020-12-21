import React from "react";
import "./App.css";
import Header from "./MainPage/Header/Header";
import Home from "./MainPage/Home/Home";
import Footer from "./MainPage/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          {/* /search */}
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* / */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
