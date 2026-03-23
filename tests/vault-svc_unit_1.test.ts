import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("vault-svc unit test 1: queries entry", () => {
  it("queries entry for vault-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-vault-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
