import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Notification from ".";

describe("Notification", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Notification
          variant="primary"
          heading="heading"
          content="content"
          alignHeading="center"
          alignContent="center"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
