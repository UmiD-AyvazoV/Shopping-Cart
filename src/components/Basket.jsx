import React from "react";

const Basket = ({ basket, modal }) => {
  return (
    <div style={{ display: modal ? "block" : "none" }}>
      <div className="mainBasket">
        <div className="showBasket">
          <h2>Basket</h2>
          {basket.map((item) => (
            <div className="basketList" key={item.id}>
              <img src={item.img} alt="#" />
              <p>x {item.count}</p>
              <p>{item.price * item.count} AZN</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;