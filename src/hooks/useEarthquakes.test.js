import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useEarthquakes from "./useEarthquakes";

describe("hook - useEarthquakes", () => {
  const mockEarthquakes = [{ id: "1", mag: 4.7 }, { id: "2", mag: 2.5 }];
  const mock = new MockAdapter(axios);

  afterEach(() => mock.reset());

  it("returns earthquakes and loading status", async () => {
    mock.onGet().reply(200, mockEarthquakes);

    const { result, waitForNextUpdate } = renderHook(() => useEarthquakes());

    expect(result.current.earthquakes).toEqual([]);
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeFalsy();

    await waitForNextUpdate();

    expect(result.current.earthquakes).toEqual(mockEarthquakes);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });

  it("returns network error", async () => {
    mock.onGet().networkError();

    const { result, waitForNextUpdate } = renderHook(() => useEarthquakes());

    expect(result.current.earthquakes).toEqual([]);
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeFalsy();

    await waitForNextUpdate();

    expect(result.current.earthquakes).toEqual([]);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });
});
