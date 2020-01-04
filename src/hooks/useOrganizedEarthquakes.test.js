import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useOrganizedEarthquakes from "./useOrganizedEarthquakes";

describe("hook - useOrganizedEarthquakes", () => {
  const mockEarthquakes = [{ place: "Alaska, USA" }, { place: "Timbuktu" }];
  const mock = new MockAdapter(axios);

  afterEach(() => mock.reset());

  it("returns earthquakes filtered by search", async () => {
    mock.onGet().reply(200, mockEarthquakes);

    const { result, waitForNextUpdate } = renderHook(() =>
      useOrganizedEarthquakes(),
    );

    await waitForNextUpdate();

    expect(result.current.earthquakes).toEqual(mockEarthquakes);

    act(() => {
      result.current.handleChange({ target: { value: "alaska" } });
    });

    expect(result.current.earthquakes).toEqual([
      { place: "Alaska, USA" },
    ]);

    act(() => {
      result.current.handleChange({ target: { value: "" } });
    });

    expect(result.current.earthquakes).toEqual(mockEarthquakes);
  });
});
