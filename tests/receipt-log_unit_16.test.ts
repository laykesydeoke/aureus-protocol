import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("receipt-log unit test 16: queries entry", () => {
  it("queries entry for receipt-log module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-receipt-log-count",[],deployer);expect(r.result).toBeDefined();
  });
});
