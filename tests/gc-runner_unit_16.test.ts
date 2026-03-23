import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("gc-runner unit test 16: queries entry", () => {
  it("queries entry for gc-runner module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-gc-runner-count",[],deployer);expect(r.result).toBeDefined();
  });
});
