import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("refund-proc unit test 11: queries entry", () => {
  it("queries entry for refund-proc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-refund-proc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
