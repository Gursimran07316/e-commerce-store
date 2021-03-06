import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, deleteUser } from "../actions/userActions";
import Message from "../components/Message";
import Loading from "../components/Loading";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const userDelete = useSelector((state) => state.userDelete);
  const {
    success: successDelete,
    error: errorDelete,
    loading: loadingDelete,
  } = userDelete;
  const userLogin = useSelector((state) => state.userLogin);
  const { user: userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUserList());
    } else {
      history.push("/signin");
    }
  }, [dispatch, userInfo, successDelete, history]);
  const removeUserHandler = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loading || loadingDelete ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.length &&
              users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>
                      {" "}
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </td>

                    <td>
                      {user.isAdmin ? (
                        <i
                          className="fas fa-check"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer
                        to={`/user/${user._id}/edit`}
                        className="ml-2"
                      >
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => removeUserHandler(user._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
