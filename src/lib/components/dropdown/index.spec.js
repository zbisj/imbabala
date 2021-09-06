import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Dropdown from ".";

describe("Dropdown", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Dropdown
          label="Click Me"
          items={[
            {
              label: "Item 1",
            },
          ]}
          variant="warning"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
