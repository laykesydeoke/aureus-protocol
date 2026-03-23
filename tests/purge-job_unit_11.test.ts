import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("purge-job unit test 11: queries entry", () => {
  it("queries entry for purge-job module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-purge-job-count",[],deployer);expect(r.result).toBeDefined();
  });
});
