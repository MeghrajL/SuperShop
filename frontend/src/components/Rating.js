import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {/*className for the i tag is selected using ternary operation if value received is >=1 full star font awesome icon is displayed half for >= 0.5 else empty star */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fa-solid fa-star"
              : value >= 0.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fa-solid fa-star"
              : value >= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fa-solid fa-star"
              : value >= 2.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fa-solid fa-star"
              : value >= 3.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fa-solid fa-star"
              : value >= 4.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>{text ? text : ""}</span>
    </div>
  );
};

Rating.defaultProps = { color: "#f8e825" }; /*seting default color prop */

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  /*used to maintain correct data types of props*/
};

export default Rating;
