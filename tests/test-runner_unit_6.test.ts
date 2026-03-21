import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("test-runner unit test 6: queries entry", () => {
  it("queries entry for test-runner module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-test-runner-count",[],deployer);expect(r.result).toBeDefined();
  });
});
