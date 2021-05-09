import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket }) {
  console.log(basket);
  return (
    <>
      {
		basket.map(item => (
			<BasketItem item = {item}/>
		))
	  }
    </>
  );
}

export default Basket;
