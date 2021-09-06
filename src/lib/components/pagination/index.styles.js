import styled from "styled-components";
import { colors, gutter } from "../theme";
import { addColor, addLightColor, aligmentLogic } from "../utilities";

const activeLogic = (active, background) => {
  if (active && background) {
    return `
      border: 1px solid ${addColor(background)}; 
      line-height: 100%;
      background: ${addColor(background)};
    `;
  } else if (active && !background) {
    return `
      border-top: ${colors.primary};
      border-bottom: ${colors.primary};
      background: ${colors.primary};
    `;
  } else if (background) {
    return `
      &:not(:last-child) {
        border-right: 1px solid ${addColor(background)} 
      }    
    `;
  }
};

export const ListItems = styled.ul`
  width: fit-content;
  margin: 0;
  padding: 0;
  display: flex;
  border: 1px solid ${colors.border};
  border-radius: ${gutter.smaller};
  align-items: center;
  justify-content: ${({ justify }) =>
    justify ? aligmentLogic(justify) : "flex-start"};
  ${({ background }) => `background: ${addLightColor(background)};`}
`;

export const ListItem = styled.li`
  border: 1px solid ${colors.border};
  padding: ${gutter.smaller} ${gutter.small};
  list-style: none;
  border-top: none;
  border-bottom: none;
  ${({ active, background }) => activeLogic(active, background)}
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border: none;
  }
  &:not(:first-child) {
    border-left: none;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: ${colors.secondary};
  ${({ color }) => color && `color: ${addColor(color)}`};
  ${({ active, color }) => active && color && `color: ${colors.white}`}
  ${({ active, color }) => active && !color && `color: ${colors.white}`}
`;
