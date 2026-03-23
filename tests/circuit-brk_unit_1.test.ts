import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("circuit-brk unit test 1: queries entry", () => {
  it("queries entry for circuit-brk module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-circuit-brk-count",[],deployer);expect(r.result).toBeDefined();
  });
});
