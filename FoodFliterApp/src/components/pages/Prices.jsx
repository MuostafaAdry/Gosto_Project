import React from "react";
import products from "../../Data/data";
// import "../Styles/button.css";
import { Col, Container, Row } from "react-bootstrap";
const Prices = ({ meanuPrice, setItems, filterprice }) => {
  return (
    <Container className="d-flex  justfiy-content-center">
      <Row>
        {meanuPrice.map((item, inded) => (
          <Col key={inded}>
            <button  onClick={() => filterprice(item)}>
              {item}
            </button>
          </Col>
        ))}
      </Row>

      <button  onClick={() => setItems(products)}>
        all
      </button>
    </Container>
  );
};

export default Prices;
