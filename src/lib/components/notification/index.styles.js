import styled from "styled-components";
import {
  addColor,
  alignText,
  addLightColor,
  addLighterColor,
} from "../utilities";

export const Heading = styled.h3`
  color: ${({ variant }) => addColor(variant)};
  margin: 0 0 5px 0;
  padding: 0;
  text-align: ${({ alignHeading }) => alignText(alignHeading)};
`;

export const Content = styled.p`
  color: ${({ variant }) => addColor(variant)};
  margin: 0;
  padding: 0;
  text-align: ${({ alignContent }) => alignText(alignContent)};
`;

export const Contianer = styled.div`
  border: 1px solid ${({ variant }) => addLightColor(variant)};
  padding: 10px;
  background: ${({ variant }) => addLighterColor(variant)};
  border-radius: 5px;
`;
