import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("date-parse unit test 16: queries entry", () => {
  it("queries entry for date-parse module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-date-parse-count",[],deployer);expect(r.result).toBeDefined();
  });
});
