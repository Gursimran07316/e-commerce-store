import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "../actions/userActions";
import Message from "../components/Message";
import Loading from "../components/Loading";
import { Row, Col } from "react-bootstrap";
import { USER_DETAILS_UPDATE_RESET } from "../constants/userConstants";
import { myOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";

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
  const updatedUser = useSelector((state) => state.updateUser);
  const { success } = updatedUser;
  const getMyOrders = useSelector((state) => state.getMyOrders);
  const { orders, loading: loadingOrders, error: errorOrders } = getMyOrders;
  useEffect(() => {
    if (!user || !user.name) {
      history.push("/signin");
    } else if (!userInfo || !userInfo.name || success || !orders) {
      dispatch({ type: USER_DETAILS_UPDATE_RESET });
      dispatch(getUserDetails());
      dispatch(myOrders());
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [dispatch, user, history, userInfo, success, orders]);
  const submitHandler = (e) => {
    e.preventDefault();

    setMessage("");
    if (password2 !== password) {
      setMessage("Passwords do not match ");
    } else {
      dispatch(updateUserDetails({ name, email, password }));
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h1>Update Profile</h1>
        <Form onSubmit={submitHandler}>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          {success && (
            <Message variant="success">Profile is successfuly updated</Message>
          )}
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
          <Form.Group controlId="password2">
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
        {loadingOrders ? (
          <Loading />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
