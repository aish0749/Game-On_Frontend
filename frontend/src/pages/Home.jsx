import React from "react";
import "./Home.css";
// import Result from "../pages/Result";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";
import cry from "../assets/cry-2.png";
import unity from "../assets/unity-5.png";
import unreal from "../assets/unreal-5.png";

import spiderman from "../assets/spiderman.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-main-content">
          <h1>Work that we produce for our clients</h1>
          <img src={cry} alt="" />
        </div>
        <div className="hero-lower">
          <img src={unity} alt="" />
          <img src={unreal} alt="" />
        </div>
      </div>

      <div className="input-box">
        <h2>Lookout for your Game!!!</h2>
        <input type="text" placeholder="SEARCH FOR YOUR GAME" />
        <Link to="/result">
        <button className="cta-btn">Search</button>
        </Link>
      </div>

      <div className="trending-games">
        <div className="trending-games-heading">
          <h2>Currently Trending Games</h2>
        </div>

        <div className="cards">
          <img className="rectangle" alt="Rectangle" src={game1} />
          <img className="rectangle" alt="Rectangle" src={game2} />
          <img className="rectamgle" alt="Rectangle" src={game3} />
          <img className="rectangle-2" alt="Rectangle" src={game4} />
        </div>
      </div>

      <section className="spiderman">
        <h2 className="spiderman-heading">
        Discover gaming paradise at our website, where epic adventures await!
        </h2>
        <img src={spiderman} alt="" className="spiderman-img" />
      </section>
      {/* <Result /> */}
    </div>

  );
};

export default Home;
