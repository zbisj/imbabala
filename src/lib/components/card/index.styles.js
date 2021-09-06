import styled from "styled-components";
import { Button } from "../button";
import { colors, gutter } from "../theme";

export const Container = styled.div`
  border: 1px solid ${colors.black};
  border-radius: ${gutter.smaller};
  display: inline-block;
  margin: ${gutter.smaller};
  width: 300px;
`;

export const Heading = styled.h4`
  margin: 0 0 ${gutter.smaller} 0;
`;
export const ContentContainer = styled.div`
  padding: ${gutter.small};
  display: inline-block;
`;

export const ActionsContainer = styled.div`
  margin-top: ${gutter.smaller};
`;

export const Image = styled.img`
  width: 300px;
  object-fit: contain;
  border-top-left-radius: ${gutter.smaller};
  border-top-right-radius: ${gutter.smaller};
`;

export const Anchor = styled(Button)`
  margin: ${gutter.smaller} ${gutter.smaller} ${gutter.smaller} 0;
`;
