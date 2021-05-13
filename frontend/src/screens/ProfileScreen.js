import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import Message from "../components/Message";
import Loading from "../components/Loading";
import { Row, Col } from "react-bootstrap";

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, user } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo, error } = userDetails;
  useEffect(() => {
    if (!user) {
      history.push("/signin");
    } else if (!userInfo) {
      dispatch(getUserDetails());
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [dispatch, user, history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();

    setMessage("");
    if (password2 !== password) {
      setMessage("Passwords do not match ");
    } else {
      //   dispatch update profile
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h1>Update Profile</h1>
        <Form onSubmit={submitHandler}>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          {loading && <Loading />}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
