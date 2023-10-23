import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "../style/CartPage/cart.module.scss";
import { DeletProduct } from "../redux/featuers/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Icons = ({ setShowCart }) => {
  const CartProducts = useSelector((state) => state.cart.CartList);
  const dispatch = useDispatch();
  const handeldelet = (Product) => {
    // to delet this product from json server else
    fetch(`http://localhost:8000/SingleProducts/${Product.id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {});
    });
    //  and delet this product anther from redux
    console.log(Product.id);
    dispatch(DeletProduct(Product));
    toast.success("Deleted");
    setShowCart(false);
    console.log(CartProducts.length);
    if (CartProducts.length <= 1) {
      setShowCart(true);
    }
  };
  const navigate = useNavigate();
  const handelEdit = (Product) => {
    dispatch(DeletProduct(Product));
    navigate("/yourcart");
  };
  // handel total
  const TotalSum = CartProducts.reduce((total, obj) => total + obj.NewPrice, 0);
  return (
    <div>
      <div className={cart.close}>
        <i className="fa-solid fa-circle-xmark"></i>
      </div>
      <div>
        {CartProducts.map((Product, index) => (
          <div className={cart.container} key={index}>
            <div className={cart.containerimg}>
              <img src={Product.cover} alt="Proimg" />
            </div>
            <div className={cart.info}>
              <p>{Product.title}</p>
              <p>quntaty:{Product.QuntatyNumber}</p>
              <h5>Price:{Product.Oldprice}$</h5>
            </div>
            <div className={cart.delet}>
              <i
                className="fa-solid fa-trash"
                onClick={() => handeldelet(Product)}
              ></i>
            </div>
            <div className={cart.eidt}>
              <span onClick={() => handelEdit(Product)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
            </div>
          </div>
        ))}
        <h1 className={cart.total}>Total:{TotalSum}</h1>
      </div>
    </div>
  );
};

export default Icons;
