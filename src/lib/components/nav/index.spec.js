import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Nav from ".";

describe("Nav", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Nav
          items={[
            { label: "Active" },
            { label: "Link" },
            { label: "Link" },
            { label: "Disabled", link: "https://github.com", disabled: true },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
