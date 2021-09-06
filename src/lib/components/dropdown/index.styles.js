import styled from "styled-components";
import { gutter, colors } from "../theme";
import { addColor } from "../utilities";

export const StyledButton = styled.button`
  color: ${colors.white};
  border: none;
  cursor: pointer;
  padding: ${gutter.smaller} ${gutter.medium};
  font-size: 1rem;
  background: ${({ variant }) => addColor(variant)};
  font-weight: 300;
  border-radius: ${gutter.smaller};
  &:after {
    display: inline-block;
    content: "";
    border-top: ${gutter.smaller} solid;
    border-left: ${gutter.smaller} solid transparent;
    margin-left: ${gutter.smaller};
    border-right: ${gutter.smaller} solid transparent;
    border-bottom: 0;
    vertical-align: ${gutter.smaller};
  }
`;
export const DropdownContainer = styled.div`
  display: block;
`;

export const ListItems = styled.ul`
  border: 1px solid ${colors.secondaryLight};
  padding: ${gutter.smaller};
  display: inline-block;
  margin-top: 1px;
  border-radius: ${gutter.smaller};
`;

export const ListItem = styled.li`
  padding: ${gutter.smaller} 0;
  min-width: 160px;
  max-width: 320px;
  list-style: none;
  ${({ seperated }) =>
    seperated &&
    ` &:not(:last-child) {
        border-bottom: 1px solid ${colors.secondaryLight};
      }
  `};
`;
