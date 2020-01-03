import React from "react";
import { shallow } from "enzyme";

import TableHeader from "./TableHeader";

describe("component - TableHeader", () => {
  it("Renders the columns in the correct order with the correct labels", () => {
    const comp = shallow(<TableHeader />);
    const labels = comp.find("th");
    const expected = [
      "ID",
      "Time",
      "Location",
      "Magnitude",
      "More"
    ];
    const recieved = Array.from(labels).map(
      label => label.props.children
    );

    expect(recieved).toEqual(expected);
  });
});
