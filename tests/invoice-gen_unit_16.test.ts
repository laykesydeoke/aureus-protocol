import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("invoice-gen unit test 16: queries entry", () => {
  it("queries entry for invoice-gen module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-invoice-gen-count",[],deployer);expect(r.result).toBeDefined();
  });
});
