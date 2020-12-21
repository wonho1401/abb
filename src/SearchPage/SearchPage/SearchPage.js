import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays ∙ 31 December to 3 January ∙ 2 guests</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult />
    </div>
  );
}

export default SearchPage;
