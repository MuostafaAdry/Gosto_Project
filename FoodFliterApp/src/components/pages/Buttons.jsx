import React from "react";
import products from "../../Data/data";
import '../Styles/button.css'
import { Col, Container, Row } from "react-bootstrap";

const Buttons = ({ meanuItems, filterProducts, setItems }) => {
  return (
    <Container className="d-flex  justfiy-content-center">
      <Row>
        {meanuItems.map((item, index) => (
          <Col key={index}>
            <button  onClick={() => filterProducts(item)}>{item}</button>
          </Col>
        ))}
      </Row>

      <button  onClick={() => setItems(products)}>All meanu</button>
    </Container>
  );
};

export default Buttons;
