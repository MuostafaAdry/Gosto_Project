import React from "react";
import Planns from "../style/Plans/Plans.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const Plans = () => {
  return (
    <>
      <div 
      
       className={Planns.offers}>
        <Container>
          <h1>Choose The Plans</h1>
          <p className={Planns.offersPreag}>
            Meet our newbies! The latest templates uploaded to the marketplace.
          </p>
          <Row className={Planns.Row}>
            <Col
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
             className={Planns.offer1} lg={4} md={6} sm={12}>
              <h3 className={Planns.offer1Title}>Free Trial</h3>
              <h4 className={Planns.offer1text}><span>$</span><sub>0</sub>/user per month</h4>
              <p className={Planns.offerpragraph}>Beautifully simple project planning, 
              <br />14 days of free trial.</p>
            <button className={Planns.offersbtn} >GET STARTED</button>
            {/* */}
            <ul>
              <li><i className="fa-solid fa-check"></i>Demo Content Install</li>
              <li><i className="fa-solid fa-check"></i>Theme Updates</li>
              <li><i className="fa-solid fa-x"></i>Demo Content Install</li>
              <li><i className="fa-solid fa-x"></i>Support And Updates</li>
              <li><i className="fa-solid fa-x"></i>Access All Themes</li>
              <li><i className="fa-solid fa-x"></i>All Themes For Life</li>
              <li><i className="fa-solid fa-x"></i>30 Days Money Back</li>
            </ul>
            </Col>

            <Col
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            className={Planns.offer2} lg={4} md={6} sm={12}>
              <h3 className={Planns.offer1Title}>Premium</h3>
              <h4 className={Planns.offer1text}><span>$</span><sub>26</sub>/user per month</h4>
              <p className={Planns.offerpragraph}>Beautifully simple project planning, 
              <br />14 days of free trial.</p>
            <button className={Planns.offersbtn} >GET STARTED</button>
            
            <ul>
              <li><i className="fa-solid fa-check"></i>Demo Content Install</li>
              <li><i className="fa-solid fa-check"></i>Theme Updates</li>
              <li><i className="fa-solid fa-x"></i>Demo Content Install</li>
              <li><i className="fa-solid fa-x"></i>Support And Updates</li>
              <li><i className="fa-solid fa-x"></i>Access All Themes</li>
              <li><i className="fa-solid fa-x"></i>All Themes For Life</li>
              <li><i className="fa-solid fa-x"></i>30 Days Money Back</li>
            </ul>
            </Col>

            <Col
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
             className={Planns.offer1} lg={4} md={6} sm={12}>
              <h3 className={Planns.offer1Title}>Unlimited Access</h3>
              <h4 className={Planns.offer1text}><span>$</span><sub>49</sub>/user per month</h4>
              <p className={Planns.offerpragraph}>Beautifully simple project planning, 
              <br />14 days of free trial.</p>
            <button className={Planns.offersbtn} >GET STARTED</button>
            <ul>
              <li><i className="fa-solid fa-check"></i>Demo Content Install</li>
              <li><i className="fa-solid fa-check"></i>Theme Updates</li>
              <li><i className="fa-solid fa-check"></i>Demo Content Install</li>
              <li><i className="fa-solid fa-check"></i>Support And Updates</li>
              <li><i className="fa-solid fa-check"></i>Access All Themes</li>
              <li><i className="fa-solid fa-check"></i>All Themes For Life</li>
              <li><i className="fa-solid fa-check"></i>30 Days Money Back</li>
            </ul>
            </Col>

            
          </Row>
        </Container>
      </div>


      <div className={Planns.section}>
        <Container>
          <h1>Choose The Plans</h1>
          <p>
            Meet our newbies! The latest templates uploaded to the marketplace.
          </p>
          <Row className={Planns.cardsContainer}>
            <Col
             data-aos="fade-up"
             data-aos-duration="3000"
             className={Planns.cart} lg={3} md={6} sm={12}>
              <span>
                {" "}
                <i className="fa-solid fa-quote-left"></i>
              </span>
              <h6 className={Planns.cartText}>
                "Congue condimentum et non eu arcu sociis aenean vivamus
                quisque. Porta purus urna. Massa id blandit enim cursus ante,
                nec consectetuer imperdiet ipsum"
              </h6>

              {/* <Link to="/Icons">Icons</Link> */}
              <h1>ALGISTINO</h1>
              <p>Marketing Company Director</p>
            </Col>
            <Col
             data-aos="fade-up"
             data-aos-duration="3000"
             className={Planns.cart} lg={3} md={6} sm={12}>
              <span>
                {" "}
                <i className="fa-solid fa-quote-left"></i>
              </span>
              <h6 className={Planns.cartText}>
                "Congue condimentum et non eu arcu sociis aenean vivamus
                quisque. Porta purus urna. Massa id blandit enim cursus ante,
                nec consectetuer imperdiet ipsum"
              </h6>
              <h1>ALGISTINO</h1>
              <p>Marketing Company Director</p>
            </Col>
            <Col 
             data-aos="fade-up"
             data-aos-duration="3000"
            className={Planns.cart} lg={3} md={6} sm={12}>
              <span>
                {" "}
                <i className="fa-solid fa-quote-left"></i>
              </span>
              <h6 className={Planns.cartText}>
                "Congue condimentum et non eu arcu sociis aenean vivamus
                quisque. Porta purus urna. Massa id blandit enim cursus ante,
                nec consectetuer imperdiet ipsum"
              </h6>
              <h1>ALGISTINO</h1>
              <p>Marketing Company Director</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Plans;
