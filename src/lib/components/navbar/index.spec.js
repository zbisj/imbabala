import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import NavBar from ".";

describe("NavBar", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <NavBar
          items={[
            { label: "Link" },
            { label: "Link" },
            { label: "Link", disabled: true },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
