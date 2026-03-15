import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("webhook-mgr unit test 1: queries entry", () => {
  it("queries entry for webhook-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-webhook-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
