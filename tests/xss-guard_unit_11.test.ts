import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("xss-guard unit test 11: queries entry", () => {
  it("queries entry for xss-guard module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-xss-guard-count",[],deployer);expect(r.result).toBeDefined();
  });
});
