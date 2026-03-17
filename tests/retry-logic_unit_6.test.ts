import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("retry-logic unit test 6: queries entry", () => {
  it("queries entry for retry-logic module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-retry-logic-count",[],deployer);expect(r.result).toBeDefined();
  });
});
