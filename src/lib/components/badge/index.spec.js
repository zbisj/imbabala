import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Badge from ".";

describe("Badge", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(<Badge label="test" pill={true} variant="primary" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
