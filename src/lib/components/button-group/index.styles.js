import styled from "styled-components";
import { addColor } from "../utilities";
import { gutter } from "../theme";

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonStyles = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  background: ${({ variant }) => addColor(variant)};
  font-size: 1rem;
  font-weight: 300;
  padding: 9px 36px;
  &:last-child {
    border-top-right-radius: ${gutter.smaller};
    border-bottom-right-radius: ${gutter.smaller};
  }
  &:first-child {
    border-top-left-radius: ${gutter.smaller};
    border-bottom-left-radius: ${gutter.smaller};
  }
`;
