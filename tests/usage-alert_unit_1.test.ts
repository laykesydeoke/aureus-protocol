import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("usage-alert unit test 1: queries entry", () => {
  it("queries entry for usage-alert module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-usage-alert-count",[],deployer);expect(r.result).toBeDefined();
  });
});
