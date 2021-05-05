import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";

const ProductList = () => {
  return (
    <Row>
      {products.map((product) => {
        return (
          <Col key={product._id} lg="4" sx="3" md="6" sm="12">
            <Product product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductList;
