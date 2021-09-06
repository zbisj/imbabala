import styled from "styled-components";
import { gutter, colors } from "../theme";

export const ContentContainer = styled.div`
  border: 1px solid ${colors.black};
  padding: ${gutter.small};
  margin-top: ${gutter.small};
  border-radius: ${gutter.smaller};
`;
