import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("rbac-ctrl unit test 6: queries entry", () => {
  it("queries entry for rbac-ctrl module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-rbac-ctrl-count",[],deployer);expect(r.result).toBeDefined();
  });
});
