import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  Anchor,
  Heading,
  Container,
  ActionsContainer,
  ContentContainer,
} from "./index.styles";

export const Card = ({ image, heading, content, actions }) => {
  return (
    <Container>
      {image && <Image src={image} />}
      <ContentContainer>
        {heading && <Heading>{heading}</Heading>}
        {content && <p>{content}</p>}
        {actions && (
          <ActionsContainer>
            {actions.map((item, index) => (
              <Anchor
                key={index}
                label={item.label}
                variant={item.variant}
                onClick={item.onClick}
              />
            ))}
          </ActionsContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  actions: PropTypes.array,
  heading: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
