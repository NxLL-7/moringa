import React from "react";
import "./home.css";
import Carousal from "./Carousal/Carousal";
import { slideIMG } from "../../imgData.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="center">
      <div className="home">
        <div className="imgSize">
          <Carousal data={slideIMG} />
        </div>
        <div className="rightBox">
          <div className="BTNs">
            <button>
              <Link to="/order" className="noDec">
                Order Now
              </Link>
            </button>
            <button>
              <Link to="/about" className="noDec">
                Read More
              </Link>
            </button>
          </div>
          <div className="prodABT">
            <p>
              Welcome to the world of wellness with our premium Moringa Powder,
              a powerful natural supplement sourced directly from the rich,
              organic farms of Bundelkhand, South Uttar Pradesh. Known as the
              “Miracle Tree,” Moringa oleifera is a treasure trove of essential
              nutrients and antioxidants, revered in Ayurveda and modern health
              science for its remarkable health benefits.
              <br />
              <br />
              Our Moringa Powder is 100% pure, organic, and chemical-free,
              cultivated using sustainable farming methods in the fertile soils
              of rural Bundelkhand. Each leaf is handpicked at peak freshness
              and carefully shade-dried to retain maximum nutrition, then finely
              ground into a vibrant green powder that’s easy to consume and full
              of life.
              <br />
              <br />
              With rising concerns over immunity and well-being, our Moringa
              Powder is a daily dose of vitality for people of all ages. It’s
              not just a supplement – it’s a commitment to clean living,
              traditional wisdom, and better health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
