import React from "react";
import { heroCards } from "../../Data/data";
import cards from "../../style/Home/cards/card.module.scss";
import { Container, Row, Col } from "react-bootstrap";
const Cards = () => {

  return (
    <>
      <div 
       data-aos="fade-up"
       data-aos-duration="3000"
       className={cards.container}>
        <Container>
          <Row>
            {heroCards.map((item, index) => (
              <Col className={cards.card} key={index} lg={2} md={3} sm={6}>
                <div className={cards.img}>
                  <img src={item.cover} alt="cover" />
                </div>
                <div className={cards.details}>
                  <h5>{item.name}</h5>
                  <p>{item.items}items</p>
                </div>
              </Col>
            ))}{" "}
          </Row>
        </Container>{" "}
      </div>
    </>
  );
};

export default Cards;
