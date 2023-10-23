import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";

const Cart2 = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/CartProducts").then((res) => {
      setItems(res.data);
    });
  }, [Items]);
  const handeldelet=(Items)=>{
    // Items.filter((item)=>item.id !==item.id)

  }
  return (
    <div>
        <Header/>
        <h1>products from http://localhost:8000/CartProducts</h1>
      {Items.map((Item, index) => (
        <div key={index}>
          <div>
            <img width="100px"  src={Item.cover} alt="Proimg" />
          </div>

          <div>
            <p>{Item.title}</p>
            <p>{Item.id}id</p>
            <h5>{Item.NewPrice}$</h5>
            <p>quntaty:{Item.QuntatyNumber}</p>
          </div>
          <div>
            <i
              className="fa-solid fa-trash"
              onClick={() => handeldelet(Item)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart2;
