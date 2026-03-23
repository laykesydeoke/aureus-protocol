import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("i18n-svc unit test 1: queries entry", () => {
  it("queries entry for i18n-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-i18n-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
