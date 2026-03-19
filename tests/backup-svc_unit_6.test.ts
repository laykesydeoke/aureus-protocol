import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("backup-svc unit test 6: queries entry", () => {
  it("queries entry for backup-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-backup-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
