import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
function Banner() {
  const [showSearch, setshowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setshowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <SearchBar />}
      </div>
      <div className="banner__info">
        <h1>
          Go <p />
          Near
        </h1>

        <Button variant="outlined">Explore nearby stays</Button>
      </div>
    </div>
  );
}

export default Banner;
