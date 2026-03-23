import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("rate-limit unit test 6: queries entry", () => {
  it("queries entry for rate-limit module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-rate-limit-count",[],deployer);expect(r.result).toBeDefined();
  });
});
