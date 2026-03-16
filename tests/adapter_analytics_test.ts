import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;

describe("adapter analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], deployer);
  });

  it("get-adapter-analytics returns all fields", () => {
    const result = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-adapter-analytics",
      [],
      deployer
    );
    const data = (result.result as any).value?.data;
    expect(data?.["active-protocol"]).toBeDefined();
    expect(data?.["is-paused"]).toBeDefined();
    expect(data?.["is-initialized"]).toBeDefined();
  });

  it("is-initialized is true after initialize-adapter", () => {
    const result = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-adapter-analytics",
      [],
      deployer
    );
    const initialized = (result.result as any).value?.data?.["is-initialized"]?.value;
    expect(initialized).toBe(true);
  });

  it("is-paused is false by default", () => {
    const result = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-adapter-analytics",
      [],
      deployer
    );
    const paused = (result.result as any).value?.data?.["is-paused"]?.value;
    expect(paused).toBe(false);
  });
});
