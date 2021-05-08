import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductList from "../components/ProductList";
import axios from "axios";

const HomeScreen = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setproducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
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
