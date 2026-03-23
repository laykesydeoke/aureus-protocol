import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pool-conn unit test 6: queries entry", () => {
  it("queries entry for pool-conn module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-pool-conn-count",[],deployer);expect(r.result).toBeDefined();
  });
});
