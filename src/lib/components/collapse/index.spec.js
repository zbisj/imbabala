import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Collapse from ".";

describe("Collapse", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Collapse />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
