import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ButtonGroup from ".";

describe("ButtonGroup", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <ButtonGroup
          items={[
            {
              variant: "primary",
              label: "Primary",
              onClick: () => {
                console.log("Button Cliked");
              },
            },
            {
              variant: "success",
              label: "Success",
              onClick: () => {
                console.log("Button Cliked");
              },
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
