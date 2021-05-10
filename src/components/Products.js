import React from 'react';
import { formatter } from "../Format";


function Products({ product ,basket, setBasket, total, money}) {

	const basketAmount = basket.find(i => i.id === product.id);
	
	const addBasket = () => {
		const checkBasket = basket.find(i => i.id === product.id);
		if(checkBasket) {
			checkBasket.amount +=1;
			setBasket([...basket.filter(i => i.id !== product.id), checkBasket])
		}else {
			setBasket([...basket, {
				id: product.id,
				amount : 1,
				title: product.title,
				price: product.price
			}])
		}
	}

	const allReamovebasket = () => {
		const checkBasket = basket.find(i => i.id === product.id);
		if(checkBasket) {
			setBasket([...basket.filter(i => i.id !== product.id)])
		}
		return;
	}

	const removeBasket = () => {
		const checkBaset = basket.find(i => i.id === product.id);
		if(checkBaset.amount > 1){
			checkBaset.amount -= 1;	
			setBasket([...basket.filter(i => i.id !== product.id), checkBaset])
		}
		return checkBaset;
	}

	return (
		<>
			<div className="product">
				<img src={product.image} />
				<h6>{product.title}</h6>
				<div className="price">${basketAmount && (basketAmount.amount * basketAmount.price).toFixed(2)}</div>
				<div className="actions">
					<button className="sell-btn" disabled={!basketAmount} onClick={removeBasket}>SAT</button>
					<button className="rmv-btn" disabled={!basketAmount} onClick={allReamovebasket}>Cikar</button>
					<span className="amount">{basketAmount && basketAmount.amount || 0}</span>
					<button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>AL</button>
				</div>
			</div>
		</>
	)
}

export default Products
