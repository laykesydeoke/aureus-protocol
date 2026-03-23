import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("number-fmt unit test 16: queries entry", () => {
  it("queries entry for number-fmt module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-number-fmt-count",[],deployer);expect(r.result).toBeDefined();
  });
});
