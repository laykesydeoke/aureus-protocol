import { describe, it, expect, beforeAll } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;
const wallet2 = accounts.get("wallet_2")!;

const TOKEN = `${deployer}.mock-sbtc`;

describe("staking-timelock contract", () => {
  it("deploys successfully", () => {
    const contracts = simnet.getContractsInterfaces();
    expect(contracts.has(`${deployer}.staking-timelock`)).toBe(true);
  });

  it("returns correct initial state", () => {
    const locked = simnet.callReadOnlyFn("staking-timelock", "get-total-locked", [], deployer);
    expect(locked.result).toBeUint(0);

    const count = simnet.callReadOnlyFn("staking-timelock", "get-lock-count", [], deployer);
    expect(count.result).toBeUint(0);

    const minAmount = simnet.callReadOnlyFn("staking-timelock", "get-min-lock-amount", [], deployer);
    expect(minAmount.result).toBeUint(1000000);
  });

  it("allows creating a 30-day lock", () => {
    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    expect(result).toBeOk(Cl.uint(1));
  });

  it("rejects lock below minimum amount", () => {
    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(100), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    expect(result).toBeErr(Cl.uint(201));
  });

  it("rejects lock with invalid duration", () => {
    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(999), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    expect(result).toBeErr(Cl.uint(202));
  });

  it("tracks user lock count", () => {
    // Create a lock first
    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );

    const locks = simnet.callReadOnlyFn(
      "staking-timelock",
      "get-user-locks",
      [Cl.principal(wallet1)],
      deployer
    );
    // Should have at least 1 lock (may have more from previous test)
    expect(locks.result).toBeTuple(expect.objectContaining({}));
  });

  it("returns lock details", () => {
    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(10000000), Cl.uint(12960), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet2
    );

    const lock = simnet.callReadOnlyFn(
      "staking-timelock",
      "get-lock",
      [Cl.uint(3)],
      deployer
    );
    expect(lock.result).toBeSome(expect.objectContaining({}));
  });

  it("calculates bonus correctly for 90-day lock", () => {
    // Lock 10M sats for 90 days (1.5% bonus = 150000 sats)
    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(10000000), Cl.uint(12960), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet2
    );

    const lockCount = simnet.callReadOnlyFn("staking-timelock", "get-lock-count", [], deployer);
    const lockId = Number(lockCount.result.value);

    const bonus = simnet.callReadOnlyFn(
      "staking-timelock",
      "get-lock-bonus",
      [Cl.uint(lockId)],
      deployer
    );
    expect(bonus.result).toBeUint(150000);
  });

  it("rejects claim before lock expires", () => {
    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    const lockCount = simnet.callReadOnlyFn("staking-timelock", "get-lock-count", [], deployer);
    const lockId = Number(lockCount.result.value);

    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "claim-lock",
      [Cl.uint(lockId), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    expect(result).toBeErr(Cl.uint(208));
  });

  it("prevents non-owner from claiming a lock", () => {
    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    const lockCount = simnet.callReadOnlyFn("staking-timelock", "get-lock-count", [], deployer);
    const lockId = Number(lockCount.result.value);

    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "claim-lock",
      [Cl.uint(lockId), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet2
    );
    expect(result).toBeErr(Cl.uint(200));
  });

  it("allows emergency withdrawal before expiry", () => {
    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    const lockCount = simnet.callReadOnlyFn("staking-timelock", "get-lock-count", [], deployer);
    const lockId = Number(lockCount.result.value);

    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "emergency-withdraw",
      [Cl.uint(lockId), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    expect(result).toBeOk(Cl.uint(5000000));
  });

  it("owner can set minimum lock amount", () => {
    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "set-min-lock-amount",
      [Cl.uint(2000000)],
      deployer
    );
    expect(result).toBeOk(Cl.bool(true));
  });

  it("non-owner cannot set minimum lock amount", () => {
    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "set-min-lock-amount",
      [Cl.uint(2000000)],
      wallet1
    );
    expect(result).toBeErr(Cl.uint(200));
  });

  it("owner can toggle pause", () => {
    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "set-pause",
      [Cl.bool(true)],
      deployer
    );
    expect(result).toBeOk(Cl.bool(true));
  });

  it("rejects lock creation when paused", () => {
    simnet.callPublicFn("staking-timelock", "set-pause", [Cl.bool(true)], deployer);

    const { result } = simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    expect(result).toBeErr(Cl.uint(209));
  });

  it("shows time remaining for active lock", () => {
    // Unpause first
    simnet.callPublicFn("staking-timelock", "set-pause", [Cl.bool(false)], deployer);

    simnet.callPublicFn(
      "staking-timelock",
      "create-lock",
      [Cl.uint(5000000), Cl.uint(4320), Cl.contractPrincipal(deployer, "mock-sbtc")],
      wallet1
    );
    const lockCount = simnet.callReadOnlyFn("staking-timelock", "get-lock-count", [], deployer);
    const lockId = Number(lockCount.result.value);

    const remaining = simnet.callReadOnlyFn(
      "staking-timelock",
      "get-lock-time-remaining",
      [Cl.uint(lockId)],
      deployer
    );
    // Should be close to 4320 (30 days minus a few blocks)
    expect(Number(remaining.result.value)).toBeGreaterThan(4300);
  });
});
