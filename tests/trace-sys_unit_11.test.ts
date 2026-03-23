import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("trace-sys unit test 11: queries entry", () => {
  it("queries entry for trace-sys module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-trace-sys-count",[],deployer);expect(r.result).toBeDefined();
  });
});
