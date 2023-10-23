import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Btns from '../style/Buttons/Button.module.scss'
import products from "../Data/data";

const Buttons = ({ meanuBtns, setItems, filterProducts }) => {
  return (
    <>
      <Container className={Btns.Container}>
        {meanuBtns.map((item, index) => (
          <div key={index}>
            <button className={Btns.btn} onClick={() => filterProducts(item)}>{item}</button>
          </div>
        ))}
        <button className={Btns.btn} onClick={() => setItems(products)}>All</button>
      </Container>
    </>
  );
};

export default Buttons;
