import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductList from "../components/ProductList";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} lg="4" sx="3" md="6" sm="12">
              <ProductList product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
