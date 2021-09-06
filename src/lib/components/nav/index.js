import React, { useState } from "react";
import PropTypes from "prop-types";
import { Anchor, NavItem, NavItems, NavContainer } from "./index.styles";

export const Nav = ({
  tabs = false,
  items,
  color,
  pills = false,
  vertical,
  background,
  alignItems,
}) => {
  const [active, setActive] = useState(0);
  return (
    <NavContainer background={background}>
      <NavItems tabs={tabs} vertical={vertical} alignItems={alignItems}>
        {items.map((item, index) => (
          <NavItem key={index} vertical={vertical}>
            <Anchor
              href={item.link ? item.link : "#"}
              tabs={tabs}
              pills={pills}
              color={color}
              active={active === index}
              vertical={vertical}
              onClick={() => setActive(index)}
              disabled={item.disabled}
              background={background}
            >
              {item.label}
            </Anchor>
            {/* TODO: ALLOW FOR DROPDOWNS TO BE ADDED  */}
          </NavItem>
        ))}
      </NavItems>
    </NavContainer>
  );
};

Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.oneOf([
    "info",
    "danger",
    "primary",
    "success",
    "warning",
    "secondary",
  ]),
  vertical: PropTypes.bool,
  alignItems: PropTypes.oneOf([
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
export default Nav;
