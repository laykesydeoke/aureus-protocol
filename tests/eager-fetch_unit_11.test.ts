import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("eager-fetch unit test 11: queries entry", () => {
  it("queries entry for eager-fetch module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-eager-fetch-count",[],deployer);expect(r.result).toBeDefined();
  });
});
