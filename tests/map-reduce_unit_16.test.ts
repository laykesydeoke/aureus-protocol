import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("map-reduce unit test 16: queries entry", () => {
  it("queries entry for map-reduce module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-map-reduce-count",[],deployer);expect(r.result).toBeDefined();
  });
});
