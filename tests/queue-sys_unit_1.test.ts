import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("queue-sys unit test 1: queries entry", () => {
  it("queries entry for queue-sys module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-queue-sys-count",[],deployer);expect(r.result).toBeDefined();
  });
});
