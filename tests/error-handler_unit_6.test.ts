import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("error-handler unit test 6: queries entry", () => {
  it("queries entry for error-handler module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-error-handler-count",[],deployer);expect(r.result).toBeDefined();
  });
});
