import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Card from ".";

describe("Card", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Card
          image="https=//bit.ly/3Au6jS4"
          heading="Heading"
          content="Irure aliquip qui cupidatat veniam aliquip id deserunt id irure Lorem do minim eiusmod. Mollit irure incididunt anim fugiat cillum deserunt ex commodo enim pariatur. Dolor ut ea aliquip pariatur dolore esse laboris enim laborum do et velit."
          actions={[{ label: "Click Me", variant: "primary" }]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
