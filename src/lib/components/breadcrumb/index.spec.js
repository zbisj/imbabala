import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Breadcrumb from ".";

describe("Breadcrumb", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Breadcrumb
          items={[
            { link: "https://youtube.com/", label: "YouTube" },
            { link: "https://youtube.com/", label: "YouTube" },
          ]}
          variant="info"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
