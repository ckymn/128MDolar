import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import product from "./products.json";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBaset = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + item.amount * item.price;
      }, 0)
    );
  }, [basket]);

  return (
    <div className="App">
      test
      <Header money={money} total={total} />
      {product.map((product, i) => (
        <Products
          key={i}
          product={product}
          basket={basket}
          setBasket={setBasket}
          total={total}
          money={money}
        />
      ))}
      <Basket basket={basket} />
      <button onClick={resetBaset}>AYAKKABI KUTUSUNU BOSALT</button>
    </div>
  );
}

export default App;
