import React, { useState } from "react";
import "./prod.css";
import { prodIMG } from "../../../imgData.json";
import Carousal2 from "../Carousal/Carousal2";

const Product = () => {
  let [num, setNum] = useState(0);
  let increaceNUM = () => {
    setNum((num = num + 1));
  };
  let decreaseNUM = () => {
    setNum((num = num - 1));
  };
  return (
    <section>
      <div className="container">
        <div className="upper">
          <h1 className="prodH1">Shop Now</h1>
          <div class="prodPNT">
            <div class="text">
              🌿 Nature’s Power in Every Spoon 💪 Boost Immunity, Naturally 🌱
              Pure Health, Pure Life 🍃 Fuel Your Day the Organic Way 🌼 Strong
              Inside, Fresh Outside ✅ Stay Fit, Stay Pure 🦁 Start Your Day
              with Strength 🌾 Green Goodness, Daily Wellness 💚 Immunity You
              Can Trust 🛡️ Naturally Shield Your Health
            </div>
            <div class="text">
              🌿 Nature’s Power in Every Spoon 💪 Boost Immunity, Naturally 🌱
              Pure Health, Pure Life 🍃 Fuel Your Day the Organic Way 🌼 Strong
              Inside, Fresh Outside ✅ Stay Fit, Stay Pure 🦁 Start Your Day
              with Strength 🌾 Green Goodness, Daily Wellness 💚 Immunity You
              Can Trust 🛡️ Naturally Shield Your Health
            </div>
          </div>
        </div>
        <div className="down">
          <div className="prodIMG">
            <Carousal2 data={prodIMG} />
          </div>
          <div className="prodSHOP">
            <div className="pordName">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              enim incidunt ut rem dolores eos magni! Inventore suscipit sit
              aliquid voluptas error!
            </div>
            <div className="prodPRICE">₹123/-</div>
            <div className="prodQUANITY">
              <div className="r">
                  <h1>QUANTITY</h1>
                  <input type="checkbox" name="" id="1" />
                  <input type="checkbox" name="" id="1" />
                  <input type="checkbox" name="" id="1" />
              </div>
              <div className="l">
                <div className="a">
                  <h1>QUANTITY</h1>
                </div>
                <div className="b">
                  <div className="dec" onClick={decreaseNUM}>
                    -
                  </div>
                  <h1>{num}</h1>
                  <div className="inc" onClick={increaceNUM}>
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
