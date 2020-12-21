import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
          title="A whole house"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720"
          title="Log house and Rural house"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
          title="A unique space"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/479c567f-d225-43c6-b4a0-2bea83cc9470.jpg?im_w=720"
          title="Busan"
          description="In front of Haeundae, Ocean View"
          price="$40 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/11bdec8e-f049-4840-9d2f-a11d884f6a81.jpg?im_w=720"
          title="Seoul"
          description="Feel the sensibility of Seoul in Vintage House"
          price="$30 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8f208814-e614-4046-8d5c-88f862906902.jpg?im_w=720"
          title="Suwon"
          description="This hotel has nice breakfast and 5 minutes on foot to Hwaseong"
          price="$30 / night"
        />
      </div>
    </div>
  );
}

export default Home;
