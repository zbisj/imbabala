import React, { useState } from "react";
import PropTypes from "prop-types";
import { Anchor, ListItem, ListItems } from "./index.styles";

export const Pagination = ({ items, color, onClick, justify, background }) => {
  const [active, setActive] = useState(0);
  return (
    <ListItems justify={justify} background={background}>
      {items &&
        items.map((item, index) => (
          <ListItem
            key={index}
            active={item.active && index}
            background={background}
          >
            <Anchor
              href={item.link}
              color={color}
              active={item.active}
              onClick={onClick}
            >
              {item.label}
            </Anchor>
          </ListItem>
        ))}
    </ListItems>
  );
};

Pagination.propTypes = {
  color: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
  justify: PropTypes.oneOf([
    "end",
    "start",
    "center",
    "around",
    "evenly",
    "between",
  ]),
  background: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
};
export default Pagination;
