import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ListGroup from ".";

describe("ListGroup", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <ListGroup items={[{ label: "List Item", variant: "primary" }]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
