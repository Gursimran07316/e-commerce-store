import React from "react";

const Rating = ({ rating, reviews, color }) => {
  return (
    <>
      {rating >= 1 ? (
        <i style={{ color }} class="fas fa-star"></i>
      ) : rating >= 0.5 ? (
        <i style={{ color }} class="fas fa-star-half-alt"></i>
      ) : (
        <i style={{ color }} class="far fa-star"></i>
      )}
      {rating >= 2 ? (
        <i style={{ color }} class="fas fa-star"></i>
      ) : rating >= 1.5 ? (
        <i style={{ color }} class="fas fa-star-half-alt"></i>
      ) : (
        <i style={{ color }} class="far fa-star"></i>
      )}
      {rating >= 3 ? (
        <i style={{ color }} class="fas fa-star"></i>
      ) : rating >= 2.5 ? (
        <i style={{ color }} class="fas fa-star-half-alt"></i>
      ) : (
        <i style={{ color }} class="far fa-star"></i>
      )}
      {rating >= 4 ? (
        <i style={{ color }} class="fas fa-star"></i>
      ) : rating >= 3.5 ? (
        <i style={{ color }} class="fas fa-star-half-alt"></i>
      ) : (
        <i style={{ color }} class="far fa-star"></i>
      )}
      {rating >= 5 ? (
        <i style={{ color }} class="fas fa-star"></i>
      ) : rating >= 4.5 ? (
        <i style={{ color }} class="fas fa-star-half-alt"></i>
      ) : (
        <i style={{ color }} class="far fa-star"></i>
      )}
      {reviews}
    </>
  );
};
Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
