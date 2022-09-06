import { describe, expect, it } from "vitest";
import { getLocationData } from "../../helpers/getLocationData";

describe("Input", () => {
  it("should return api data on successful request", async () => {
    const data = await getLocationData("8.8.8.8");

    expect(data.ip).toBe("50.66.80.65");
  });

  it("should return users data on failure", async () => {
    const data = await getLocationData(null);

    expect(data.ip).toBe("50.66.80.65");
  });
});
