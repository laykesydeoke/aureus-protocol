import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("archive-svc unit test 11: queries entry", () => {
  it("queries entry for archive-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-archive-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
