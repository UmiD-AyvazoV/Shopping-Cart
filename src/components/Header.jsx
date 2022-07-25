import React from "react";
import Basket from "./Basket";

const Header = ({ total, balance, setModal, modal, handleFilter, basket }) => {
  return (
    <div className="header">
      <h1>Shopping Cart</h1>
      <h1>Balance: {balance.toFixed(2)} AZN</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleFilter(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <h1>Total: {total} AZN</h1>
      <button onClick={() => setModal(!modal)}>
        <i className="fa-solid fa-cart-shopping">
          {basket.length > 0 && <span className="count">{basket.length}</span>}
        </i>
      </button>
    </div>
  );
};

export default Header;