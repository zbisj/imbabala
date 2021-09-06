import styled from "styled-components";
import { colors, gutter } from "../theme";
import { addColor, addLightColor } from "../utilities";

const colorLogic = (color, disabled) => {
  if (disabled) {
    return `color: ${colors.disabled}`;
  } else if (color) {
    return `color: ${addColor(color)}`;
  } else {
    return `color:  ${colors.primary}`;
  }
};

const aligmentLogic = (alignment) => {
  if (alignment === "end") {
    return "flex-end";
  } else if (alignment === "start") {
    return "flex-start";
  } else if (alignment === "center") {
    return "center";
  } else if (alignment === "around") {
    return "space-around";
  } else if (alignment === "evently") {
    return "space-evenly";
  } else if (alignment === "between") {
    return "space-between";
  } else {
    return "flex-start";
  }
};

const activeLogic = (active, tabs, background, pills, vertical) => {
  if (active && tabs && !vertical) {
    return `
            border: 1px solid transparent;
            border-color:  ${colors.border} ${colors.border} ${
      background ? addLightColor(background) : colors.white
    };
            margin-bottom: -1px;
            border-top-left-radius: ${gutter.smaller};
            border-top-right-radius: ${gutter.smaller};`;
  } else if (active && pills && background === undefined) {
    return `
            color: ${colors.white};
            border-radius: ${gutter.smaller};
            background-color: ${colors.primary}
            `;
  } else if (active && pills) {
    return `
            color: ${colors.white};
            border-radius: ${gutter.smaller};
            background-color: ${addColor(background)}
            `;
  }
};

export const NavContainer = styled.div`
  padding: ${gutter.small};
  ${({ background }) =>
    background && `background: ${addLightColor(background)}`};
`;
export const NavItems = styled.ul`
  margin: 0;
  padding: ${gutter.small} 0;
  display: flex;
  ${({ vertical }) => !vertical && `align-items: center`};
  ${({ vertical, alignItems }) =>
    vertical && `align-items: ${aligmentLogic(alignItems)}`};
  ${({ alignItems }) =>
    alignItems && `justify-content: ${aligmentLogic(alignItems)}`};
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  ${({ tabs, vertical }) =>
    tabs && !vertical && `border-bottom: 1px solid ${colors.border}`};
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin-bottom: -1px;
  ${({ vertical }) => vertical && `margin: ${gutter.small} 0;`};
`;

export const Anchor = styled.a`
  padding: ${gutter.small};
  text-decoration: none;
  ${({ disabled }) => disabled && `pointer-events: none`};
  ${({ color, disabled }) => colorLogic(color, disabled)};
  ${({ active, tabs, background, pills, vertical }) =>
    activeLogic(active, tabs, background, pills, vertical)};
`;
