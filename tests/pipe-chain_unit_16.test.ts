import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pipe-chain unit test 16: queries entry", () => {
  it("queries entry for pipe-chain module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-pipe-chain-count",[],deployer);expect(r.result).toBeDefined();
  });
});
