import React, { useState } from "react";
import "./App.css";
import Card from "./components/pages/Card";
import products from "./Data/data";
import Buttons from "./components/pages/Buttons";
import Prices from "./components/pages/Prices";
const App = () => {
  const [Items, setItems] = useState(products);

  // you must use the useSate that you use to show the products in your Cart
  // لكى تعرض بيه المنتجاتItemsملهوش لازمه علشان انت مستخده

  // const [Price, setPrice] = useState(products);

  const meanuItems = [...new Set(products.map((product) => product.category))];
  const filterProducts = (cat) => {
    const NewProduct = products.filter((item) => item.category === cat);
    setItems(NewProduct);
  };

  // handel price
  const meanuPrice = [...new Set(products.map((product) => product.price))];
  const filterprice = (pri) => {
    const Newprice = products.filter((item) => item.price === pri);
    setItems(Newprice);
  };
  return (
    <div>
      <h1 className="title">Food Filter App</h1>
      <Buttons
        setItems={setItems}
        filterProducts={filterProducts}
        meanuItems={meanuItems}
      />

      <Prices
        meanuPrice={meanuPrice}
        filterprice={filterprice}
        setItems={setItems}
      />
      <Card Items={Items} />
    </div>
  );
};

export default App;
