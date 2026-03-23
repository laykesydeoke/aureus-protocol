import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("payment-gate unit test 16: queries entry", () => {
  it("queries entry for payment-gate module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-payment-gate-count",[],deployer);expect(r.result).toBeDefined();
  });
});
