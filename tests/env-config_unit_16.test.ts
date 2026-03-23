import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("env-config unit test 16: queries entry", () => {
  it("queries entry for env-config module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-env-config-count",[],deployer);expect(r.result).toBeDefined();
  });
});
