import React from 'react'

function BasketItem({ item }) {
	return (
		<div>
			{item.id} * {item.amount}
		</div>
	)
}

export default BasketItem;
