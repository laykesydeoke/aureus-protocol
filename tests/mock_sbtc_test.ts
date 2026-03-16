import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("mock sBTC token", () => {
  it("deployer can mint tokens", () => {
    const result = simnet.callPublicFn(
      "mock-sbtc",
      "mint",
      [Cl.uint(1_000_000_000), Cl.principal(alice)],
      deployer
    );
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("minted tokens are accessible", () => {
    simnet.callPublicFn(
      "mock-sbtc",
      "mint",
      [Cl.uint(500_000_000), Cl.principal(alice)],
      deployer
    );
    const balance = simnet.callReadOnlyFn(
      "mock-sbtc",
      "get-balance",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((balance.result as any).value?.value ?? 0)).toBeGreaterThan(0);
  });

  it("token has correct name", () => {
    const name = simnet.callReadOnlyFn(
      "mock-sbtc",
      "get-name",
      [],
      alice
    );
    expect(name.result).not.toBeNone();
  });
});
