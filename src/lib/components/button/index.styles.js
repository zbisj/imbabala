import styled from "styled-components";
import { addColor } from "../utilities";

export const ButtonStyles = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  background: ${({ variant }) => addColor(variant)};
  font-size: 1rem;
  border-radius: 4px;
  font-weight: 300;
  padding: 9px 36px;
`;
