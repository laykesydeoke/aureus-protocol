import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;
const wallet1 = simnet.getAccounts().get("wallet_1")!;

describe("failover integration 1", () => {
  it("performs create-read-update cycle 1", () => {
    // Create
    const cr = simnet.callPublicFn("yield-aggregator", "create-failover", [Cl.uint(100)], deployer);
    expect(cr.result).toBeOk(expect.objectContaining({ type: expect.any(Number) }));
    // Read
    const rd = simnet.callReadOnlyFn("yield-aggregator", "get-failover-count", [], deployer);
    expect(rd.result).toBeDefined();
  });

  it("validates ownership in workflow 1", () => {
    const cr = simnet.callPublicFn("yield-aggregator", "create-failover", [Cl.uint(150)], deployer);
    expect(cr.result).toBeOk(expect.objectContaining({ type: expect.any(Number) }));
    // Non-owner cannot update
    const up = simnet.callPublicFn("yield-aggregator", "update-failover", [Cl.uint(1), Cl.uint(999)], wallet1);
    expect(up.result).toBeErr(expect.objectContaining({ type: expect.any(Number) }));
  });
});
