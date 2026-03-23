import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("csrf-token unit test 16: queries entry", () => {
  it("queries entry for csrf-token module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-csrf-token-count",[],deployer);expect(r.result).toBeDefined();
  });
});
