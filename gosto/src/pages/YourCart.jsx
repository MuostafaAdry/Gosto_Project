import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import Header from "../component/Header";
import { Col, Container, Row } from "react-bootstrap";
import cart from "../style/Yourcart/yourCart.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StoreCartProducts } from "../redux/featuers/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const YourCart = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const Singleid = useSelector((state) => state.products.productId);
  console.log(Singleid);
  const [SingleProduct, setSingleProduct] = useState([]);
  const id = SingleProduct.id;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/SingleProducts/${Singleid}`)
      .then((res) => {
        setSingleProduct(res.data);
      });
  }, [Singleid]);

  const [Quntaty, setQuntaty] = useState(1);
  const intialQuntaty = 1;
  const handelinc = () => {
    setQuntaty(Quntaty + 1);
  };
  const handeldec = () => {
    if (Quntaty <= 1) {
      setQuntaty(intialQuntaty);
    } else {
      setQuntaty(Quntaty - 1);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelAddToCart = (SingleProduct) => {
    const QuntatyNumber = Quntaty;
    const Oldprice = SingleProduct.price;
    const NewPrice = Quntaty * Oldprice;
    const title = SingleProduct.title;
    const cover = SingleProduct.cover;
    const Cartprodct = { id, QuntatyNumber, Oldprice, NewPrice, title, cover };
    dispatch(StoreCartProducts(Cartprodct));
    console.log(Cartprodct)
    // axios
    //   .post("http://localhost:8000/CartProducts", Cartprodct)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
       toast.success("You Added this Product to Your Cart");

    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className={cart.heading}>Product Details Pages</h1>

        <Col>
          <Row>
            <Col className={cart.imgContainer} lg={6} md={6} sm={12}>
              <img src={SingleProduct.cover} alt="Proimg" />
            </Col>
            <Col className={cart.productInfo} lg={6} md={6} sm={12}>
              <h2>{SingleProduct.title}</h2>
              <p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ff4500"}
                />
              </p>
              <h4>{SingleProduct.price * Quntaty}$</h4>
              <p>by Blueskytechco in Mockups</p>
              <div className={cart.counter}>
                <button onClick={handelinc} className={cart.Cartbtn}>+</button>
                <span className={cart.Quntaty}>{Quntaty}</span>
                <button onClick={handeldec} className={cart.Cartbtn}>-</button>
                <button onClick={() => handelAddToCart(SingleProduct)} className={cart.AddtoCartbtn}>
                  Add To CART
                </button>

                <h6>PRODUCTS DESCRIPTION</h6>
                <p>
                  Designed by Puik in 1949 as one of the first models created
                  especially for Carl Hansen & Son, and produced since 1950. The
                  last of a series of chairs wegner designed based on
                  inspiration from antique chinese armchairs.
                </p>
                <h6>PRODUCT DETAILS</h6>
                <p>
                  Material: Plastic, Wood <br />
                  Legs: Lacquered Oak And Black Painted Oak
                  <br />
                  Dimensions And Weight: Height: 80 Cm, Weight: 5.3 Kg
                  <br />
                  Length: 48cm
                  <br />
                  Depth: 52 Cm
                  <br />
                  Seat Height: 44 Cm
                  <br />
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default YourCart;
