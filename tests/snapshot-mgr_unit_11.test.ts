import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("snapshot-mgr unit test 11: queries entry", () => {
  it("queries entry for snapshot-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-snapshot-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
