import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("notif-queue unit test 1: queries entry", () => {
  it("queries entry for notif-queue module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-notif-queue-count",[],deployer);expect(r.result).toBeDefined();
  });
});
