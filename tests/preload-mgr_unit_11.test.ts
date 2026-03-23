import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("preload-mgr unit test 11: queries entry", () => {
  it("queries entry for preload-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-preload-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
