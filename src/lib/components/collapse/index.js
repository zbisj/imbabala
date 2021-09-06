import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "../button";
import { ContentContainer } from "./index.styles";

export const Collapse = ({
  control = { label: "Click Me", variant: "primary" },
  content,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button
        label={control.label}
        variant={control.variant}
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <ContentContainer>{content && <p>{content}</p>}</ContentContainer>
      )}
    </div>
  );
};

Collapse.propTypes = {
  content: PropTypes.string,
  control: PropTypes.object,
};

export default Collapse;
