import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("failover unit test 6: queries entry", () => {
  it("queries entry for failover module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-failover-count",[],deployer);expect(r.result).toBeDefined();
  });
});
