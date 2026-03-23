import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("access-ctrl unit test 11: queries entry", () => {
  it("queries entry for access-ctrl module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-access-ctrl-count",[],deployer);expect(r.result).toBeDefined();
  });
});
