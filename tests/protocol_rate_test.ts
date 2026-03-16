import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;

describe("protocol rate analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], deployer);
  });

  it("get-all-protocol-rates returns rates", () => {
    const rates = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-all-protocol-rates",
      [],
      deployer
    );
    expect(rates.result).not.toBeNone();
  });

  it("optimal protocol can be queried", () => {
    const optimal = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-optimal-protocol",
      [],
      deployer
    );
    expect(optimal.result).not.toBeNone();
  });

  it("protocol rate can be updated by owner", () => {
    const result = simnet.callPublicFn(
      "protocol-adapter",
      "update-protocol-rate",
      [Cl.uint(1), Cl.uint(800)],
      deployer
    );
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("protocol info is accessible after init", () => {
    const info = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-protocol-info",
      [Cl.uint(1)],
      deployer
    );
    expect(info.result).not.toBeNone();
  });
});
