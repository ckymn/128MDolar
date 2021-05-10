import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import product from "./products.json";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(105763264000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
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
      <Header money={money} total={total} />
      <div className="container products">
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
      </div>
      {total > 0 && (
        <Basket
          money={money}
          total={total.toFixed(2)}
          basket={basket}
          product={product}
          resetBaset={resetBasket}
        />
      )}
    </div>
  );
}

export default App;
