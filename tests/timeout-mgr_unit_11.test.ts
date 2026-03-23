import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("timeout-mgr unit test 11: queries entry", () => {
  it("queries entry for timeout-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-timeout-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
