import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cdn-config unit test 1: queries entry", () => {
  it("queries entry for cdn-config module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-cdn-config-count",[],deployer);expect(r.result).toBeDefined();
  });
});
