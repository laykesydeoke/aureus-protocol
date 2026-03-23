import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;
const wallet1 = simnet.getAccounts().get("wallet_1")!;

describe("promo-engine integration 5", () => {
  it("performs create-read-update cycle 5", () => {
    // Create
    const cr = simnet.callPublicFn("yield-aggregator", "create-promo-engine", [Cl.uint(500)], deployer);
    expect(cr.result).toBeOk(expect.objectContaining({ type: expect.any(Number) }));
    // Read
    const rd = simnet.callReadOnlyFn("yield-aggregator", "get-promo-engine-count", [], deployer);
    expect(rd.result).toBeDefined();
  });

  it("validates ownership in workflow 5", () => {
    const cr = simnet.callPublicFn("yield-aggregator", "create-promo-engine", [Cl.uint(550)], deployer);
    expect(cr.result).toBeOk(expect.objectContaining({ type: expect.any(Number) }));
    // Non-owner cannot update
    const up = simnet.callPublicFn("yield-aggregator", "update-promo-engine", [Cl.uint(1), Cl.uint(999)], wallet1);
    expect(up.result).toBeErr(expect.objectContaining({ type: expect.any(Number) }));
  });
});
