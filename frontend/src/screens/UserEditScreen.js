import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loading from "../components/Loading";
import { USER_EDIT_ADMIN_RESET } from "../constants/userConstants";

const UserEditScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const userDetailsAdmin = useSelector((state) => state.userDetailsAdmin);
  const { error, loading, userInfo } = userDetailsAdmin;
  const userEditAdmin = useSelector((state) => state.userEditAdmin);
  const { success, error: errorEdit, loading: loadingEdit } = userEditAdmin;
  useEffect(() => {
    if (success) {
      dispatch({ type: USER_EDIT_ADMIN_RESET });
      history.push("/admin/users");
    } else {
      if (!userInfo.name || userInfo._id !== id) {
        dispatch(getUserById(id));
      } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
        setAdmin(userInfo.isAdmin);
      }
    }
  }, [dispatch, userInfo, success, id, history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email, isAdmin: admin, _id: userInfo._id }));
  };

  return (
    <FormContainer>
      <Link className="btn btn-light my-3" to="/admin/users">
        Go back
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1>Edit</h1>
          <Form onSubmit={submitHandler}>
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

            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={admin}
                onChange={(e) => setAdmin(e.target.checked)}
              ></Form.Check>
              {loadingEdit && <Loading />}
              {errorEdit && <Message variant="danger">{errorEdit}</Message>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </>
      )}
    </FormContainer>
  );
};

export default UserEditScreen;
