import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles } from "./index.styles";

export const Button = ({
  variant = "info",
  label = "Click Me",
  onClick,
  className,
}) => {
  return (
    <ButtonStyles className={className} variant={variant} onClick={onClick}>
      {label}
    </ButtonStyles>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
  onClick: PropTypes.func,
};

export default Button;
