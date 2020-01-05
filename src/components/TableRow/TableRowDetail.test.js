import React from "react";
import { render } from "@testing-library/react";

import TableRowDetail from "./TableRowDetail";

describe("component - TableRowDetail", () => {
  it("renders when hidden is false", async () => {
    const { queryByText } = render(
      <table>
        <tbody>
          <TableRowDetail longitude={123} latitude={456} hidden={false} />
        </tbody>
      </table>,
    );

    expect(queryByText("Longitude: 123")).toBeInTheDocument();
    expect(queryByText("Latitude: 456")).toBeInTheDocument();
  });

  it("does not render when hidden is true", async () => {
    const { queryByText } = render(
      <table>
        <tbody>
          <TableRowDetail longitude={123} latitude={456} hidden={true} />
        </tbody>
      </table>,
    );

    expect(queryByText("Longitude: 123")).not.toBeInTheDocument();
    expect(queryByText("Latitude: 456")).not.toBeInTheDocument();
  });
});
