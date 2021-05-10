import React from 'react'

function BasketItem({ item , product}) {
	return (
		<li className="basketItem">
			{product.title} × <span>{item.amount}</span>  
		</li>
	)
}

export default BasketItem;
