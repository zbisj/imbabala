import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Example from ".";

describe("Example", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
