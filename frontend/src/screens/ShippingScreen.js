import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
const ShippingScreen = ({ history }) => {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const [city, setCity] = useState(shippingAddress.city);
  const [address, setAddress] = useState(shippingAddress.address);
  const [postalCode, setPostalcode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addShippingAddress({ city, address, postalCode, country }));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
        </Form.Group>

        <Form.Group controlId="postalcode">
          <Form.Label>Postalcode</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(e) => setPostalcode(e.target.value)}
            placeholder="postalcode"
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="country"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
