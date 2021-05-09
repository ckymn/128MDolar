import React from 'react'

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
				name: product.title,
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
			<div className="products">

				<h6>{product.title}</h6>
				<h6>{basketAmount && (basketAmount.amount * basketAmount.price).toFixed(2)}</h6>
				<div className="actions">
					<button disabled={!basketAmount} onClick={removeBasket}>SAT</button>
					<button disabled={!basketAmount} onClick={allReamovebasket}>Cikar</button>
					<span className="amount">{basketAmount && basketAmount.amount || 0}</span>
					<button disabled={total + product.price > money} onClick={addBasket}>SATIN AL</button>
				</div>
			</div>
		</>
	)
}

export default Products
