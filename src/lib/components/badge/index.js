import React from "react";
import PropTypes from "prop-types";
import { Contianer } from "./index.styles";

export const Badge = ({ label, variant = "info", pill }) => {
  return (
    <Contianer variant={variant} pill={pill}>
      {label}
    </Contianer>
  );
};

Badge.propTypes = {
  pill: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
};
export default Badge;
