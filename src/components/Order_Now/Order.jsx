import React from "react";
import "./order.css";
import Product from "./Product/Product";

const Order = () => {
  return ( 
    <section>
      <div className="upper">
        <div className="odrABT">
          <h1>🛒 Order Now for a Healthier Tomorrow!</h1>
          <p>
            Choose health from the heart of India. With every purchase of our
            Bundelkhand grown Moringa Powder, you not only nourish your body but
            also support the livelihoods of local farmers and promote
            sustainable agriculture. <br />
            <br />
            ✔ 100% Organic <br />
            ✔ Farm-to-Table Freshness <br />
            ✔ Immune-Boosting Superfood <br />
            ✔ Eco-Friendly & Ethically Made
            <br />
            <br />
          </p>
        </div>
        <div className="mid">
          <h3 className="h3">
            👉 Available now in 100g, 250g, and 500g packs.
            <br />
            Join the green revolution—boost your immunity naturally with the
            power of Moringa!
          </h3>
        </div>
        <div className="end">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Order;
