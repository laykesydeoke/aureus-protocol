import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("dashboard-api unit test 6: queries entry", () => {
  it("queries entry for dashboard-api module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-dashboard-api-count",[],deployer);expect(r.result).toBeDefined();
  });
});
