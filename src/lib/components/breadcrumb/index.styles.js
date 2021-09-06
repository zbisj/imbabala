import styled from "styled-components";
import { gutter } from "../theme";
import { addColor } from "../utilities";

export const ForwardSlash = styled.span`
  color: ${({ variant }) => addColor(variant)};
  margin: 0 ${gutter.small};
`;

export const Anchor = styled.a`
  color: ${({ variant }) => addColor(variant)};
  text-decoration: none;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const ListItems = styled.ul`
  display: flex;
`;
