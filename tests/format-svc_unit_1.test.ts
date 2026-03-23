import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("format-svc unit test 1: queries entry", () => {
  it("queries entry for format-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-format-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
