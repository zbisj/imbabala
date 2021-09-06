import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItems } from "./index.styles";

export const ListGroup = ({ items }) => {
  return (
    <ListItems>
      {items.map((item, index) => (
        // TODO: ADD ANCHOR TAGS TO REDIRECT
        <ListItem
          key={index}
          active={item.active}
          variant={item.variant}
          oneItem={items.length === 1}
        >
          {item.label}
        </ListItem>
      ))}
    </ListItems>
  );
};

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListGroup;
