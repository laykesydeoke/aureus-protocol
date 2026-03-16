import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("carrier-api unit test 11: queries entry", () => {
  it("queries entry for carrier-api module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-carrier-api-count",[],deployer);expect(r.result).toBeDefined();
  });
});
