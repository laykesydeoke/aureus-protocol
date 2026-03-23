import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("timezone-svc unit test 6: queries entry", () => {
  it("queries entry for timezone-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-timezone-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
