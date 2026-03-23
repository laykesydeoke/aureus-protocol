import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("restore-proc unit test 16: queries entry", () => {
  it("queries entry for restore-proc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-restore-proc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
