import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.svg";
import Style from "../style/Header.sass/Header.module.scss";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [Show, setShow] = useState(false);
  const handelshow = () => {
    setShow((preve) => !preve);
    setShowCart(false);
  };
  const [ShowCart, setShowCart] = useState(false);
  // const navigate = useNavigate();
  const CartProducts = useSelector((state) => state.cart.CartList);
  const CartNumber = CartProducts.length;
  const handelopneCart = () => {
    setShowCart((preve) => !preve);
    setShow(false);
    if (CartNumber === 0) {
      setShowCart(toast.success("Your Cart is Empty"));
      setShowCart(false);
      setShow(false);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className={Style.nav}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img className={Style.logo} src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className={Style.NavLink} to="/">Home</Link>
              {/* <Link className={Style.NavLink} to="/cart2">Cart</Link> */}
            </Nav>
            <Form className="d-flex">
           
              <div className={Style.icon}>
                <i className="fa-solid fa-user" onClick={handelshow}>
                  {Show && (
                    <div className={Style.sing}>
                      <p>Sing in</p>
                      <p>Sing up</p>
                    </div>
                  )}
                </i>
                <i  className="fa-regular fa-heart"></i>
              </div>
              <Button className={Style.cradbtn} onClick={handelopneCart}>
                <i className="fa-solid fa-cart-plus"></i>
                YourCart({CartNumber})
                {ShowCart && (
                  <div className={Style.cartpage}>
                    <CartPage setShowCart={setShowCart} />
                  </div>
                )}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
