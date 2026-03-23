import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("log-rotate unit test 11: queries entry", () => {
  it("queries entry for log-rotate module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-log-rotate-count",[],deployer);expect(r.result).toBeDefined();
  });
});
