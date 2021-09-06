import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles, ButtonGroupContainer } from "./index.styles";

export const ButtonGroup = ({
  items = [
    {
      variant: "info",
      label: "Info",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "info",
      label: "Info",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
}) => {
  const RenderButtons = () => (
    <ButtonGroupContainer>
      {items.map((item, index) => (
        <ButtonStyles key={index} variant={item.variant} onClick={item.onClick}>
          {item.label}
        </ButtonStyles>
      ))}
    </ButtonGroupContainer>
  );

  return <RenderButtons />;
};

ButtonGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonGroup;
