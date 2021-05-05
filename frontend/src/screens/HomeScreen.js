import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <ProductList />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
