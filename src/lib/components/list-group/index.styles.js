import styled from "styled-components";
import { gutter, colors } from "../theme";
import { addColor, addLightColor } from "../utilities";

export const ListItems = styled.ul`
  padding: 0;
  display: inline-block;
  margin-top: 1px;
  border-radius: ${gutter.smaller};
`;

export const ListItem = styled.li`
  border: 1px solid ${colors.border};
  padding: ${gutter.small};
  min-width: 160px;
  max-width: 320px;
  list-style: none;
  ${({ variant }) =>
    variant &&
    `
    color: ${addColor(variant)};
    background-color: ${addLightColor(variant)}; 
    `};
  &:not(:last-child) {
    border-bottom: none;
  }
  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  &:first-child {
    ${({ oneItem }) => !oneItem && `border-bottom: none`};
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  ${({ active }) =>
    active &&
    `
    color: ${colors.white};
    border-color: ${addColor("primary")};
    background-color: ${addColor("primary")}; 
    `};
`;
