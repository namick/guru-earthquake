import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";

import TableRow from "./TableRow";

describe("component - TableRow", () => {
  it("renders all of the values in the correct order with the correct formatting", () => {
    const comp = shallow(
      <TableRow
        id="id"
        time="2017-07-25T23:23:23.430Z"
        place="place"
        longitude={0}
        latitude={0}
        mag={0}
      />,
    );

    const values = comp.find("td").map(value => value.props().children);

    expect(values[0]).toBe("id");
    expect(values[1]).toBe("July 25, 2017 @ 23:23");
    expect(values[2]).toBe("place");
    expect(values[3]).toBe(0);
  });

  it("renders clickable button that displays extra details", async () => {
    const { getByText, queryByText } = render(
      <table>
        <tbody>
          <TableRow
            id="id"
            time="2017-07-25T23:23:23.430Z"
            place="place"
            longitude={123}
            latitude={456}
          />
        </tbody>
      </table>,
    );

    expect(queryByText("Longitude: 123")).not.toBeInTheDocument();
    expect(queryByText("Latitude: 456")).not.toBeInTheDocument();

    fireEvent.click(getByText("Details"));

    expect(queryByText("Longitude: 123")).toBeInTheDocument();
    expect(queryByText("Latitude: 456")).toBeInTheDocument();

    fireEvent.click(getByText("Details"));

    expect(queryByText("Longitude: 123")).not.toBeInTheDocument();
    expect(queryByText("Latitude: 456")).not.toBeInTheDocument();
  });
});
