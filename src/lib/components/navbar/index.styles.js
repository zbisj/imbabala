import styled from "styled-components";
import { colors, gutter } from "../theme";
import { addColor, addLightColor, aligmentLogic } from "../utilities";

export const NavbarContainer = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) =>
    justify ? aligmentLogic(justify) : "flex-start"};
  background-color: ${({ background }) =>
    background ? addLightColor(background) : colors.white};
`;

export const NavBarItem = styled.li`
  padding: ${gutter.small};
  list-style: none;
`;

export const Image = styled.img`
  width: ${gutter.large};
  height: ${gutter.large};
  object-fit: contain;
`;

export const Anchor = styled.a`
  ${({ name }) => name && `font-weight: bold`};
  text-decoration: none;
  color: ${({ color }) => (color ? addColor(color) : colors.secondary)};
  ${({ disabled }) =>
    disabled && `color: ${colors.disabled};  pointer-events: none;`};
`;
