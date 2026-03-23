import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("health-chk unit test 6: queries entry", () => {
  it("queries entry for health-chk module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-health-chk-count",[],deployer);expect(r.result).toBeDefined();
  });
});
