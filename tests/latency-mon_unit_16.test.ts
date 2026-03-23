import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("latency-mon unit test 16: queries entry", () => {
  it("queries entry for latency-mon module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-latency-mon-count",[],deployer);expect(r.result).toBeDefined();
  });
});
