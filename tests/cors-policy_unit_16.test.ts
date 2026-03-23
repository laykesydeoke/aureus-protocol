import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cors-policy unit test 16: queries entry", () => {
  it("queries entry for cors-policy module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-cors-policy-count",[],deployer);expect(r.result).toBeDefined();
  });
});
