import React from "react";
import PropTypes from "prop-types";
import { Anchor, ListItem, ListItems, ForwardSlash } from "./index.styles";

export const Breadcrumb = ({
  items = [
    { link: "https://github.com/", label: "Item" },
    { link: "https://github.com/", label: "Item" },
  ],
  variant = "info",
}) => {
  const RenderItems = () => (
    <ListItems>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Anchor href={item.link} variant={variant}>
            {item.label}
          </Anchor>
          <ForwardSlash variant={variant}>/</ForwardSlash>
        </ListItem>
      ))}
    </ListItems>
  );

  return <RenderItems />;
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
};

export default Breadcrumb;
