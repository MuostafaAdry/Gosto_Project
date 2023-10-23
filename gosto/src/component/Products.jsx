import React, { useState } from "react";
import product from "../style/products/products.module.scss";
// import { products } from "../Data/data";
// import products from "../Data/data";
import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../assets/baners/b1.png";
import banner2 from "../assets/baners/b2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { StorProductsId } from "../redux/featuers/products/productSlices";
import axios from "axios";
import Buttons from '../component/Buttons';

const Products = ({Items,meanuBtns,setItems,filterProducts}) => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const [Showimg, setShoeimg] = useState("");
  const handelimg = (item) => {
    setShoeimg(item.cover);
    // setShowPopup(true);
  };

  // handel cart product from reduc tollkit

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelProCart = (item) => {
    const id = item.id;
    const title = item.title;
    const cover = item.cover;
    const price = item.price;
    const qty = item.qty;
    const PoductsCart = { id, title, cover, price, qty };
    console.log(PoductsCart);
    axios
      .post("http://localhost:8000/SingleProducts", PoductsCart)
      .then((res) => {})
      .catch((err) => {});
    // id=> to store it and show product that have this id in cart padge
    dispatch(StorProductsId(id));
    navigate("/yourcart");
  };

  return (
    <div>
      <Container>
        <h1>Trendings Products</h1>

        <p className={product.tittle}>
          Check the hottest designs of the week. These rising stars are worth
          your attention.
        </p>
        <Buttons
         meanuBtns={meanuBtns}
         setItems={setItems}
         filterProducts={filterProducts}
         />
        <Row>
          {Items.map((item, indexPro) => (
            <Col
              data-aos="flip-right"
              lg={3}
              md={6}
              sm={12}
              key={indexPro}
              className={product.Card}
            >
              <div className={product.img}>
                <img
                  // onClick={() => handelimg(item)}
                  src={item.cover}
                  alt="img"
                />
              </div>
              <div className={product.icons}>
                <button className={product.iconscard}>
                  <i
                    onClick={() => handelProCart(item)}
                    className="fa-solid fa-cart-plus"
                  ></i>
                </button>
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button onClick={openPopup}>
                  <i
                    onClick={() => handelimg(item)}
                    className="fa-solid fa-magnifying-glass"
                  ></i>
                </button>
              </div>
              <div className={product.detalis}>
                <h6>{item.title}</h6>
                <p>{item.author}</p>
                <h4 className={product.detalisPrice}>{item.price}$</h4>
              </div>
            </Col>
          ))}
        </Row>
        {showPopup && (
          <div className={product.overlay}>
            <p className={product.closeOverlay}>
              <i
                onClick={closePopup}
                className="fa-regular fa-circle-xmark"
              ></i>
            </p>
            <div className={product.overlayimg}>
              <img src={Showimg} alt="Showimg" />
            </div>
          </div>
        )}

        <Row className={product.baners}>
          <Col
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
           className={product.baner} lg={6} md={6} sm={6}>
            <div className={product.banerTitle}>
              <h2>Simple IPhone</h2>
              <h3>Mockups Design PSD, Ai, EPS</h3>
              <p>Sale 30% Off For Members</p>
              <button>Shop Now</button>
            </div>

            <img src={banner2} alt="banner1" />
          </Col>
          <Col
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
           className={product.baner} lg={6} md={6} sm={6}>
            <div className={product.banerTitle}>
              <h2>Mockup PSD</h2>
              <h3>50+ Ui Screen Mockups</h3>
              <p>Sale 30% Off For Members</p>
              <button>Shop Now</button>
            </div>

            {/* <button>Shop Now</button> */}
            <img src={banner1} alt="banner1" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
