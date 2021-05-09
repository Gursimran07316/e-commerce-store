import { Spinner } from "react-bootstrap";

import React from "react";

const Loading = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="secondary"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;
