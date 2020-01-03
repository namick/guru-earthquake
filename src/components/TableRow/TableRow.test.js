import React from "react";
import { shallow } from "enzyme";

import TableRow from "./TableRow";

describe("component - TableRow", () => {
  it("renders all of the values in the correct order with the correct formatting", () => {
    const comp = shallow(
      <TableRow
        id="id"
        time="2017-07-25T23:23:23.430Z"
        place="place"
        long={0}
        lat={0}
        mag={0}
      />
    );

    const values = comp
      .find("td")
      .map(value => value.props().children);

    expect(values[0]).toBe("id");
    expect(values[1]).toBe(
      "July 25, 2017 @ 23:23"
    );
    expect(values[2]).toBe("place");
    expect(values[3]).toBe(0);
  });
});
