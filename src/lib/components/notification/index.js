import React from "react";
import PropTypes from "prop-types";
import { Heading, Contianer, Content } from "./index.styles";

export const Notification = ({
  variant,
  heading,
  content,
  alignHeading,
  alignContent,
}) => {
  return (
    <Contianer variant={variant}>
      <Heading variant={variant} alignHeading={alignHeading}>
        {heading}
      </Heading>
      <Content variant={variant} alignContent={alignContent}>
        {content}
      </Content>
    </Contianer>
  );
};

Notification.propTypes = {
  variant: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
  heading: PropTypes.string,
  content: PropTypes.string,
  alignHeading: PropTypes.string,
  alignContent: PropTypes.string,
};

export default Notification;
