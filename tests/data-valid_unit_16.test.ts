import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("data-valid unit test 16: queries entry", () => {
  it("queries entry for data-valid module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-data-valid-count",[],deployer);expect(r.result).toBeDefined();
  });
});
