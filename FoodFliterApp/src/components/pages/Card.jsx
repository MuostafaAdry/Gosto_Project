import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Styles/Card.css'
const Card = ({Items}) => {
  return (
    <>
    <Container>
        <Row>
            {
                Items.map((item,index)=>(
                    <Col lg={4} md={6} ms={12} key={index}>
                        <Col className='img-container'>
                            <img src={item.img} alt="" />
                        </Col>
                        <Col className='cart-info'>
                            <h1>{item.category}--{item.price}$</h1>
                            <p>{item.desc}</p>
                            <p>{item.title}</p>
                        </Col>
                    </Col>
                ))
            }
        </Row>
    </Container>
      
    </>
  );
}

export default Card;
