import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import blog from "../style/Blog/blog.module.scss";
import Blog1 from "../assets/Blogs/b1.jpg";
import Blog2 from "../assets/Blogs/b2.jpg";
import Blog3 from "../assets/Blogs/b3.jpg";

const Blog = () => {
  return (
    <>
      <Container  className={blog.Container}>
        <h1>LATEST BLOG POSTS</h1>
        <p>Latest marketplace news, success stories and tutorials.</p>

        <Row className={blog.AllBlogs}>
          <Col
             data-aos="fade-up"
             data-aos-duration="3000"
           lg={4} md={6} sm={12}>
            <div className={blog.title}>
              <button>Image</button>
              <h4>
                Post Date : <span> October 27, 2021</span>
              </h4>
              <h6>Transition Your Favorite Looks into...</h6>
            </div>
            <div className={blog.ContainerImg}>
              <img src={Blog1} alt="img" />
            </div>
          </Col>
          <Col
             data-aos="fade-up"
             data-aos-duration="3000"
          lg={4} md={6} sm={12}>
            <div className={blog.title}>
              <button>Image</button>
              <h4>
                Post Date : <span> October 27, 2021</span>
              </h4>
              <h6>Transition Your Favorite Looks into...</h6>
            </div>
            <div className={blog.ContainerImg}>
              <img src={Blog2} alt="img" />
            </div>
          </Col>
          <Col 
             data-aos="fade-up"
             data-aos-duration="3000"
          lg={4} md={6} sm={12}>
            <div className={blog.title}>
              <button>Image</button>
              <h4>
                Post Date : <span> October 27, 2021</span>
              </h4>
              <h6>Transition Your Favorite Looks into...</h6>
            </div>
            <div className={blog.ContainerImg}>
              <img src={Blog3} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
