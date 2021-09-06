import React from "react";
import PropTypes from "prop-types";
import { Image, Anchor, NavBarItem, NavbarContainer } from "./index.styles";

export const NavBar = ({
  brand,
  items,
  color,
  justify,
  children,
  background,
}) => {
  return (
    <NavbarContainer background={background} justify={justify}>
      {brand && brand.image && (
        <NavBarItem>
          <Anchor href={brand.link ? brand.link : "#"}>
            <Image src={brand.image} />
          </Anchor>
        </NavBarItem>
      )}

      {brand && brand.name && (
        <NavBarItem>
          <Anchor
            href={brand.link ? brand.link : "#"}
            name={brand.name}
            color={color}
          >
            {brand.name}
          </Anchor>
        </NavBarItem>
      )}

      {items.map((item, index) => (
        <NavBarItem key={index}>
          <Anchor
            href={item.link ? item.link : "#"}
            color={color}
            disabled={item.disabled}
          >
            {item.label}
          </Anchor>
        </NavBarItem>
      ))}
      {children && children}
    </NavbarContainer>
  );
};

NavBar.propTypes = {
  brand: PropTypes.object,
  color: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node,
  background: PropTypes.string,
};
export default NavBar;
