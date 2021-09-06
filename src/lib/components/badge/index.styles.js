import styled from "styled-components";
import { colors } from "../theme";
import { addColor } from "../utilities";

export const Contianer = styled.p`
  color: ${colors.white};
  padding: 5px 10px;
  display: inline-block;
  font-size: 10px;
  text-align: center;
  min-height: 10px;
  line-height: 1;
  white-space: nowrap;
  font-weight: 700;
  border-radius: ${({ pill }) => (pill ? "10px" : "5px")};
  vertical-align: baseline;
  background-color: ${({ variant }) => addColor(variant)};
`;
