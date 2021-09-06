import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Pagination from ".";

describe("Pagination", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Pagination />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
