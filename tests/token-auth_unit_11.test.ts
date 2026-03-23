import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("token-auth unit test 11: queries entry", () => {
  it("queries entry for token-auth module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-token-auth-count",[],deployer);expect(r.result).toBeDefined();
  });
});
