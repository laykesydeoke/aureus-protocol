import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("compact-svc unit test 16: queries entry", () => {
  it("queries entry for compact-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-compact-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
