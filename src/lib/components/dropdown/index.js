import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  ListItem,
  ListItems,
  StyledButton,
  DropdownContainer,
} from "./index.styles";

export const Dropdown = ({ label, items, variant = "info", seperated }) => {
  const [visible, setVisible] = useState(false);

  const RenderItems = (items) => {
    if (items.items) {
      console.log(items);
      return (
        <DropdownContainer>
          <ListItems>
            {items.items.map((item, index) => (
              // TODO: ADD ANCHOR TAGS TO REDIRECT
              <ListItem key={index} seperated={item.seperated}>
                {item.label}
              </ListItem>
            ))}
          </ListItems>
        </DropdownContainer>
      );
    }
    return null;
  };

  return (
    <>
      <StyledButton variant={variant} onClick={() => setVisible(!visible)}>
        {label}
      </StyledButton>
      {visible && <RenderItems items={items} />}
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
  seperated: PropTypes.bool,
};
export default Dropdown;
