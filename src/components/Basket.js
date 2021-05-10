import React from "react";
import BasketItem from "./BasketItem";
import { formatter } from "../Format";

function Basket({ basket, money, total, product, resetBaset }) {
  return (
    <div className="basket-container container">
      <h3>YOUR BASKET</h3>
      <ul>
        {basket.map((item, i) => (
          <BasketItem
            key={i}
            item={item}
            product={product.find((i) => i.id === item.id)}
          />
        ))}
      </ul>

      <button className="reset" onClick={resetBaset}>
        AYAKKABI KUTUSUNU BOSALT
      </button>

      <div className="total">
        Total : {formatter.format(total)} <br />
        Remaining : {formatter.format(money - total)}
      </div>
    </div>
  );
}

export default Basket;
