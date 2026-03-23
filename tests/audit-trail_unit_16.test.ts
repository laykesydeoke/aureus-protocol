import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("audit-trail unit test 16: queries entry", () => {
  it("queries entry for audit-trail module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-audit-trail-count",[],deployer);expect(r.result).toBeDefined();
  });
});
